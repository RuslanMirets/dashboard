import { IconType } from 'react-icons';
import {
	AiOutlineEye,
	AiOutlineStar,
	AiOutlineTeam,
	AiOutlineVideoCamera,
} from 'react-icons/ai';

export const getIcon = (id: number): IconType => {
	switch (id) {
		case 2:
			return AiOutlineStar;
		case 3:
			return AiOutlineVideoCamera;
		case 4:
			return AiOutlineTeam;

		case 1:
		default:
			return AiOutlineEye;
	}
};
