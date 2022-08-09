import { getStrapiMedia } from '@lib/media';
import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './Product.module.css';

export const Product = ({ image, name, blurb, desc, notes }) => {
	console.log(image);
	return (
		<div className={styles.product}>
			<div className="container">
				<div className={styles.content}>
					<div className="kanji">
						<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 230">
							<path
								fill="#B2AEA8"
								d="M7.903 6.694c0-3.011-.038-4.028-.115-6.694 1.42.806 1.86 1.093 3.242 2.033h17.013c.729-.805.94-1.055 1.669-1.822a62.577 62.577 0 0 1 2.59 1.822c.325.25.44.403.44.537 0 .25-.364.576-1.38 1.132l-.039 12.87c0 3.127.077 8.728.288 16.803v.115c0 .211-.115.364-.326.441-.25.115-1.458.288-2.187.288-.575 0-.69-.038-.69-.288v-2.839H10.78v2.762c0 .211-.038.288-.115.365-.25.21-1.381.364-2.436.364-.441 0-.575-.115-.614-.537.154-3.644.154-4.22.211-12.87l.077-14.482Zm20.485-3.74H10.761v12.755h17.627V2.954ZM10.78 16.63v13.523h17.627V16.63H10.78ZM31.265 55.51c1.017-1.343 1.304-1.745 2.321-3.011 1.822 1.304 2.36 1.707 4.066 3.241.154.211.25.326.25.403 0 .153-.211.288-.441.288H20.984c1.055 2.762 2.148 4.469 4.757 7.461 2.973 3.453 5.889 6.176 8.44 7.883 1.457.94 2.512 1.497 4.872 2.513v.537c-1.67.288-2.513.902-3.415 2.398-3.529-2.59-6.042-5.121-9.091-9.169-2.475-3.28-4.029-6.003-5.966-10.51l.039 9.13v7.422h3.97c.94-1.266 1.266-1.63 2.187-2.723 1.668 1.227 2.148 1.63 3.702 3.088.076.115.115.25.115.326 0 .115-.154.25-.365.25H20.6v.575c.115 5.773.115 6.1.154 8.113-.077.288-.115.365-.326.403-.115.038-1.496.115-2.033.115-.403 0-.576-.115-.576-.537l.039-2.225c0-1.669.038-2.8.038-3.203.038-1.535.077-2.647.077-2.762v-.48h-6.138c-1.592 0-2.283.039-3.05.25l-.211-1.496c.94.21 2.148.325 3.242.325h6.1v-7.384l.076-7.231c-1.209 2.647-1.784 3.606-3.53 5.85-2.474 3.203-6.29 7.058-9.264 9.418C3.491 76.11 2.551 76.667.25 77.856L0 77.415c4.661-3.568 7.672-6.656 11.413-11.816 2.512-3.49 3.702-5.486 5.313-9.13H4.105c-.902 0-1.822.077-2.647.25l-.211-1.593c.729.211 2.186.403 2.762.403h13.81v-4.718c0-1.784-.038-2.321-.153-3.74.94.114 1.668.249 2.148.287 1.995.288 2.398.441 2.398.844 0 .403-.211.537-1.707 1.017v6.291h10.76ZM3.99 105.591c.576.537 1.017.691 1.823.691 1.131 0 2.148-.211 11.278-2.398a111.4 111.4 0 0 1 6.58-1.419c2.838-.576 4.257-.94 5.485-1.343.806-.249 1.093-.326 1.42-.326.479 0 1.38.364 2.186.844.806.479 1.17 1.016 1.17 1.534 0 .614-.48 1.017-1.266 1.017-.21 0-.441 0-.767-.038-.48-.077-.69-.077-1.132-.077-6.943 0-13.637 6.617-13.637 13.561 0 3.606 1.898 6.464 5.409 7.922 1.342.575 2.877.939 4.104.978.806 0 1.132.115 1.707.652.768.729 1.209 1.458 1.209 1.956 0 .653-.614 1.132-1.458 1.132-2.36 0-6.004-1.304-8.286-2.915-3.088-2.187-4.719-5.352-4.719-9.092 0-3.28 1.63-6.944 4.431-9.898 1.63-1.783 3.203-2.877 6.618-4.661-5.026.614-14.329 3.376-18.146 5.448-.805.479-1.093.575-1.63.575-.978 0-2.187-.94-3.127-2.397-.652-.979-1.054-2.072-1.054-2.724 0-.326.076-.576.44-1.093.403.978.73 1.515 1.363 2.071Zm24.13 3.664c1.496.863 2.59 1.63 3.606 2.512 1.458 1.343 2.034 2.264 2.034 3.242 0 .978-.576 1.707-1.267 1.707-.537 0-.537 0-1.783-2.647-.73-1.419-2.034-3.203-3.127-4.296l.537-.518Zm4.182-2.36c1.458.653 2.647 1.382 3.893 2.321 1.535 1.17 2.072 2.033 2.072 3.127 0 .978-.403 1.669-1.017 1.669-.364 0-.613-.211-.94-.768-1.419-2.551-2.186-3.606-4.469-5.773l.46-.576ZM2.59 158.895c.805.211 1.707.288 2.59.288h6.578c.73-.729.94-.978 1.67-1.669 1.016.653 1.342.902 2.358 1.669.25.25.365.403.365.576 0 .326-.25.441-1.63.939-1.708 3.338-3.242 5.352-6.043 7.922-2.762 2.513-4.622 3.779-7.519 5.121l-.402-.537c2.838-1.86 4.546-3.414 6.77-6.099 2.187-2.685 3.28-4.393 4.431-6.982H5.18c-.767 0-1.822.077-2.397.211l-.192-1.439Zm20.639-10.722c0-.479 0-.479.038-1.995 0-.537 0-1.131-.077-2.186.844.115 1.496.211 1.9.249 1.86.154 2.397.326 2.397.691 0 .326-.441.575-1.669.901v2.359h5.927c1.055-1.304 1.42-1.668 2.647-2.8 1.669 1.304 2.148 1.745 3.779 3.088a.577.577 0 0 1 .153.365c0 .172-.153.287-.364.287H25.856v.902c.039.537.039.805.039 1.534 0 .48-.25.576-1.458.576-.288 0-.48.038-.614.038h-.115c-.364 0-.48-.115-.537-.403.038-1.17.038-1.17.038-2.647h-7.998c0 .48 0 .48.038 1.42v1.055c-.038.402-.326.479-2.186.479-.365 0-.48-.077-.48-.364.038-1.228.077-1.592.077-2.59H4.508c-1.017 0-2.072.115-2.839.288l-.25-1.534c.979.21 1.9.287 3.089.287h8.152c0-2.436 0-2.839-.115-4.143.901.115 1.592.173 2.033.249 2.033.154 2.398.288 2.398.691 0 .364-.442.575-1.784.863v1.611c.038.326.038.365.038.729h7.999ZM8.44 174.202c-.48 2.513-1.266 4.143-2.647 5.677-.844.94-2.282 1.708-3.126 1.708-.576 0-1.094-.94-1.094-1.919 0-.652.154-.978.576-1.17.153-.076.326-.153 1.055-.364 2.436-.691 3.606-1.707 4.718-3.932h.518Zm17.416-20.505c.73-.613.979-.767 1.67-1.381 1.208.902 1.591 1.17 2.8 2.11.153.173.21.25.21.326 0 .25-.287.403-.652.403-.076 0-.537-.038-1.055-.115-.844.441-2.589 1.304-5.198 2.551 1.132 2.551 1.67 3.529 2.686 4.872 2.59-2.398 2.59-2.398 3.97-3.932 1.669-1.822 1.669-1.861 2.187-2.685 2.647 1.304 3.568 1.822 3.568 2.148 0 .364-.365.441-1.746.441h-.077c-2.8 2.11-5.083 3.529-7.461 4.623 1.38 1.592 3.088 3.011 5.16 4.219 2.186 1.343 3.97 1.957 7.154 2.59l-.038.614c-.844.211-1.17.364-1.784.844-.652.575-.902.901-1.132 1.784-2.397-1.132-3.894-2.187-6.138-4.297-3.414-3.165-5.562-6.502-7.02-10.914-.48.211-.48.211-1.995.94v5.486c0 .249 0 .844.039 1.745 0 .537 0 1.266.038 2.225v.211c0 1.17-.806 1.746-3.97 2.551-.288-1.822-.806-2.11-4.546-2.589l.038-.537c.21 0 2.033.038 5.486.115h.076c.326 0 .403-.115.403-.576v-6.866c0-1.382 0-1.861-.038-3.089 1.017.25 1.304.288 2.32.48 2.763-2.033 2.878-2.11 4.144-3.414H9.36c-1.132 0-1.9.076-2.647.211l-.326-1.343c1.016.115 1.956.211 3.126.211h16.342v.038ZM7.021 171.593c.94.154 2.359.288 3.452.288h15.422c.978-1.093 1.266-1.419 2.225-2.436 1.42 1.17 1.86 1.534 3.241 2.8.077.116.154.25.154.288 0 .154-.154.288-.326.288H10.473c-1.055 0-2.474.115-3.165.249l-.287-1.477Zm6.617 2.398c2.283 2.282 3.28 3.855 3.28 5.083 0 1.093-1.17 2.551-2.071 2.551-.48 0-.768-.403-.768-1.132-.038-3.241-.21-4.546-.94-6.291l.5-.211Zm7.673-.154c3.203 2.034 4.795 3.741 4.795 5.122 0 .978-.979 2.359-1.707 2.359-.403 0-.537-.211-.806-1.419-.403-1.784-1.266-3.645-2.59-5.678l.308-.384Zm7.96-.096c2.359 1.017 5.025 2.552 6.214 3.53.576.479.806 1.132.806 2.033 0 1.266-.537 2.187-1.266 2.187-.441 0-.69-.25-1.209-1.305-1.457-2.762-2.8-4.469-4.756-6.003l.21-.442ZM7.461 208.364c3.242-.902 4.757-1.381 7.423-2.398-.806-2.071-1.304-3.011-2.647-5.025l.403-.365c1.995 1.458 3.165 2.513 4.392 3.971.576.69.806 1.266.806 1.899 0 1.342-.844 2.973-1.535 2.973-.402 0-.48-.115-.767-1.42-.076-.326-.153-.69-.364-1.266-3.74 2.187-6.08 3.338-11.087 5.352-.077.978-.326 1.458-.652 1.458s-.441-.211-1.745-3.933c1.668-.153 2.071-.21 3.164-.575l-.48-8.651c-.038-1.093-.153-1.994-.364-3.817 1.497.653 1.957.902 3.453 1.669 2.724-1.016 5.889-2.915 7.75-4.718 2.761 1.707 3.413 2.148 3.413 2.436 0 .211-.287.364-.613.364-.25 0-.537-.038-1.381-.153-3.05 1.457-4.757 1.994-9.63 3.011l.461 9.188Zm1.918 20.869c-.038.364-.115.479-.326.613-.153.077-1.266.154-1.86.154-.48 0-.653-.115-.691-.537.038-1.304.077-9.341.077-13.235 0-1.535-.039-2.359-.154-3.932 1.496.69 1.957.94 3.376 1.86h19.373c.767-.863 1.017-1.131 1.784-1.956 1.131.806 1.458 1.055 2.513 1.956.287.25.402.403.402.576 0 .326-.287.537-1.534 1.132 0 9.053 0 9.206.21 12.985v.115c0 .48-.805.767-2.358.767-.403 0-.576-.115-.614-.537v-1.496H9.379v1.535Zm8.69-14.118h-8.69v4.988h8.69v-4.988Zm0 5.927h-8.69v5.774h8.69v-5.774Zm8.592-23.726c-.21 4.258-.901 6.617-2.762 9.302-1.995 2.916-4.105 4.585-8.248 6.407l-.402-.576c3.606-2.282 5.485-4.181 6.866-6.943 1.17-2.436 1.63-4.431 1.746-8.21h-1.707c-1.957.077-1.957.077-2.551.211l-.288-1.419c.767.249 1.342.288 2.877.288H32.55c.69-.806.901-1.055 1.63-1.823 1.055.979 1.381 1.266 2.36 2.187.402.364.537.537.537.691 0 .249 0 .249-1.535.939-.403 6.042-1.017 9.418-2.072 11.336-.69 1.305-1.592 1.746-4.66 2.225-.327-1.093-.614-1.457-1.305-1.822-.729-.364-1.63-.614-3.28-.901v-.614c2.8.288 4.949.479 5.41.537h.44c.69 0 .979-.288 1.381-1.534.768-2.187 1.343-6.253 1.42-10.281H26.66Zm2.896 22.787v-4.988h-8.804v4.988h8.805Zm-8.823 6.694h8.804v-5.774h-8.804v5.774Z"
							/>
						</svg>
					</div>
					<div>
						<h2>{name}</h2>
						<p>
							<strong>
								<i>{blurb}</i>
							</strong>
						</p>
						<p>
							<strong>Description:</strong>
							<br />
							{desc}
						</p>
						<p>
							<strong>Notes:</strong>
						</p>
						<ul className={styles.notes}>
							{notes.data.map(({ attributes }) => (
								<li key={attributes.ProductNote}>{attributes.ProductNote}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.image}>
				<Image
					alt={image.alternativeText}
					src={getStrapiMedia(image.url)}
					priority
					layout="responsive"
					width={502}
					height={800}
				/>
			</div>
		</div>
	);
};

Product.propTypes = {
	name: PropTypes.string.isRequired,
	blurb: PropTypes.string,
	desc: PropTypes.string,
	notes: PropTypes.object,
	image: PropTypes.object,
};
