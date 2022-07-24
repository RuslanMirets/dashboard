import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegUserCircle } from 'react-icons/fa';
import Button from '@/components/ui/Button/Button';
import Field from '@/components/ui/Field/Field';
import UserAvatar from '@/components/ui/user-avatar/UserAvatar';
import { useAuth } from '@/hooks/useAuth';
import { useOutside } from '@/hooks/useOutside';
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
	} = useForm<IAuthFields>({ mode: 'onChange' });

	const { user, setUser } = useAuth();

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		if (type === 'login')
			setUser({
				id: 123,
				name: 'Cillian Murphy',
				email: 'email@emai.ry',
				avatarPath: '/avatar.png',
			});
		// else if (type === 'register') console.log(data);
	};

	return (
		<div className={styles.wrapper} ref={ref}>
			{user ? (
				<UserAvatar avatarPath={user.avatarPath || ''} />
			) : (
				<button className={styles.button} onClick={() => setIsShow(!isShow)}>
					<FaRegUserCircle />
				</button>
			)}
			{isShow && (
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
					<div className='mt-5 mb-1 text-center'>
						<Button onClick={() => setType('login')}>Login</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
					>
						Register
					</button>
				</form>
			)}
		</div>
	);
};

export default AuthForm;
