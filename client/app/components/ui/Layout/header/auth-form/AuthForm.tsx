import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegUserCircle } from 'react-icons/fa';
import Button from '@/components/ui/Button/Button';
import Field from '@/components/ui/Field/Field';
import UserAvatar from '@/components/ui/user-avatar/UserAvatar';
import { useAuth } from '@/hooks/useAuth';
import { useOutside } from '@/hooks/useOutside';
import { menuAnimation } from '@/utils/animations/fade';
import styles from './AuthForm.module.scss';
import { IAuthFields } from './auth-form.interface';
import { validEmail } from './auth.constants';

const AuthForm: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false);

	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<IAuthFields>({ mode: 'onChange' });

	const { user, setUser } = useAuth();

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		if (type === 'login')
			setUser({
				id: 123,
				name: 'Cillian Murphy',
				email: 'email@emai.ry',
				avatarPath: '/avatar.jpg',
			});
		// else if (type === 'register') console.log(data);

		reset();
		setIsShow(false);
	};

	return (
		<div className={styles.wrapper} ref={ref}>
			{user ? (
				<UserAvatar
					link='/dashboard'
					avatarPath={user.avatarPath || ''}
					title='Перейти в dashboard'
				/>
			) : (
				<button className={styles.button} onClick={() => setIsShow(!isShow)}>
					<FaRegUserCircle />
				</button>
			)}
			<motion.div animate={isShow ? 'open' : 'closed'} variants={menuAnimation}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please enter a valid email address',
							},
						})}
						placeholder='Email'
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min length should more 6 symbols',
							},
						})}
						placeholder='Password'
						error={errors.password}
						type='password'
					/>
					<div className={styles.loginButton}>
						<Button onClick={() => setType('login')}>Login</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
					>
						Register
					</button>
				</form>
			</motion.div>
		</div>
	);
};

export default AuthForm;
