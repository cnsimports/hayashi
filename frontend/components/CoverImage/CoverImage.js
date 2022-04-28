import { getStrapiMedia } from '@lib/media';
import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './CoverImage.module.css';

export const CoverImage = ({ Parallax, CoverImage }) => {
	const { alternativeText, url, mime } = CoverImage.data.attributes;
	return (
		<div
			className={`${styles['cover-image']}${Parallax ? ` ${styles['-parallax']}` : ''}`}
			style={{ backgroundImage: Parallax ? `url(${getStrapiMedia(url)})` : '' }}
		>
			{mime.includes('video') && (
				<video muted={true} controls={false} autoPlay={true} loop={true}>
					<source src={getStrapiMedia(url)} />
				</video>
			)}
			{mime.includes('image') && !Parallax && (
				<Image priority alt={alternativeText} src={getStrapiMedia(url)} layout="fill" />
			)}
		</div>
	);
};

CoverImage.propTypes = {
	alternativeText: PropTypes.string,
	Parallax: PropTypes.bool,
	CoverImage: PropTypes.shape({
		data: PropTypes.shape({
			attributes: PropTypes.shape({
				mime: PropTypes.string,
				alternativeText: PropTypes.string,
				url: PropTypes.string.isRequired,
			}),
		}),
	}).isRequired,
};
