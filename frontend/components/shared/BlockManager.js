import PropTypes from 'prop-types';

import { CoverImage } from '@components/CoverImage/CoverImage';
import { Hero } from '@components/Hero/Hero';

const getBlockComponent = ({ __typename, ...rest }, index) => {
	let Block;

	switch (__typename) {
		case 'ComponentHeroHero':
			Block = Hero;
			break;
		case 'ComponentImagesCoverImage':
			Block = CoverImage;
			break;
	}

	return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
	return <>{blocks.map(getBlockComponent)}</>;
};

BlockManager.defaultProps = {
	blocks: [],
};

BlockManager.propTypes = {
	blocks: PropTypes.array,
};

export default BlockManager;