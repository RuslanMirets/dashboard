import { FC } from 'react';
import Layout from '@/components/ui/layout/Layout';
import MovieItem from '@/components/ui/movie-item/MovieItem';
import styles from './Home.module.scss';
import { IHome } from './home.interface';

const Home: FC<IHome> = ({ newMovies }) => {
	return (
		<Layout title='RED Cinema'>
			<h1 className={styles.heading}>Newest movies</h1>
			<div className={styles.catalog}>
				{newMovies.length ? (
					newMovies.map((movie) => <MovieItem key={movie.id} movie={movie} />)
				) : (
					<div>Movies not found</div>
				)}
			</div>
		</Layout>
	);
};

export default Home;
