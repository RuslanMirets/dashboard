import { FC } from 'react';
import Loader from '@/components/ui/Loader';
import { useAuth } from '@/hooks/useAuth';
import ReviewItem from './ReviewItem';
import styles from './Reviews.module.scss';
import AddReviewForm from './add-review-form/AddReviewForm';
import { IReviews } from './reviews.interface';

//TODO: create interface
const Reviews: FC<IReviews> = ({ movieId, reviews, isLoading }) => {
	const { user } = useAuth();

	return (
		<div className='mt-10'>
			<div>{user && <AddReviewForm movieId={movieId} />}</div>
			{isLoading ? (
				<Loader />
			) : reviews.length ? (
				<>
					<div className={styles.grid}>
						{reviews.map((review) => (
							<ReviewItem key={review.id} review={review} />
						))}
					</div>
				</>
			) : (
				<p>Reviews not found!</p>
			)}
		</div>
	);
};

export default Reviews;
