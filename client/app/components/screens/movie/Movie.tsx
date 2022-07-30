import { useMutation, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import Layout from '@/components/ui/layout/Layout';
import { MovieService } from '@/services/movie.service';
import { ViewsService } from '@/services/views.service';
import styles from './Movie.module.scss';
import Reviews from './reviews/Reviews';

const Movie: FC = () => {
	const { query } = useRouter();
	const movieId = Number(query?.id);

	const { data: movie, isLoading } = useQuery(
		['get movie', movieId],
		() => MovieService.getOneById(movieId),
		{ enabled: !!movieId, select: ({ data }) => data },
	);

	const { mutate } = useMutation(['update count opened'], () =>
		ViewsService.updateViews(movieId),
	);

	useEffect(() => {
		if (movieId) mutate();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [movieId]);

	return (
		<Layout title={`${movie?.name} - RED Cinema`}>
			<div className={styles.wrapper}>
				<div className={styles.poster}>
					{movie?.poster && (
						<Image
							className={styles.image}
							src={movie?.poster || ''}
							alt={movie?.name}
							width={220}
							height={330}
							layout='responsive'
						/>
					)}
				</div>
				<div className={styles.detail}>
					<h1 className={styles.heading}>{movie?.name}</h1>
					<div className={styles.rating}>{movie?.rating?.toFixed(1)}</div>
					<div className={styles.title}>About movie</div>
					<ul>
						<li>
							<span>Fees in the world</span>
							<span>${movie?.fees.toLocaleString()}</span>
						</li>
					</ul>
					<Reviews
						movieId={movieId}
						reviews={movie?.reviews || []}
						isLoading={isLoading}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default Movie;
