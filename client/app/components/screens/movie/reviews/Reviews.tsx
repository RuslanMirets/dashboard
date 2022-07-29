import { FC } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { IReview } from '@/shared/interfaces/review.interface';
import styles from './Reviews.module.scss';
import AddReviewForm from './add-review-form/AddReviewForm';

//TODO: create interface
const Reviews: FC<{ movieId: number; reviews: IReview[]; refetch: any }> = ({
	movieId,
	reviews,
	refetch,
}) => {
	const { user } = useAuth();

	return (
		<>
			<div>{user && <AddReviewForm movieId={movieId} refetch={refetch} />}</div>
		</>
	);
};

export default Reviews;
