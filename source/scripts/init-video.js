/* eslint-disable */
const initVideo = () => {
	const videoSlider = document.querySelector('.video-sliders');

	if (!videoSlider) {
		return;
	}

	const videoContainer = document.querySelectorAll('.video-slider__content');

	videoSlider.addEventListener('click', function (evt) {
		videoContainer.forEach((item) => {
			if (evt.target === item && !item.classList.contains('video-ready')) {
				item.classList.add('video-ready');
				const videoLink = item.dataset.video;
				item.insertAdjacentHTML(
					'afterbegin',
					`<iframe src="${videoLink}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
				);
			}
		});
	});
};

export default initVideo;
