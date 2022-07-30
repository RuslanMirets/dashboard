import { motion } from 'framer-motion';
import { FC } from 'react';
import { BiSearch } from 'react-icons/bi';
import Field from '@/components/ui/Field/Field';
import MovieItem from '@/components/ui/movie-item/MovieItem';
import { menuAnimation } from '@/utils/animations/fade';
import styles from './Search.module.scss';
import { useSearch } from './useSearch';

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch();

	return (
		<div className={styles.search_top}>
			<label>
				<Field
					value={searchTerm}
					onChange={handleSearch}
					placeholder='Search movies ...'
					Icon={BiSearch}
				/>
			</label>
			{isSuccess && (
				<motion.div
					className={styles.result}
					initial={false}
					animate={isSuccess ? 'open' : 'closed'}
					variants={menuAnimation}
				>
					{data?.length ? (
						data.map((movie) => <MovieItem key={movie.id} movie={movie} />)
					) : (
						<div>Movies not found!</div>
					)}
				</motion.div>
			)}
		</div>
	);
};

export default Search;
