import Splide from '@splidejs/splide';
/* eslint-disable */
const initSplide = () => {
	const caseSplide1 = document.getElementById('case-splide-1');
	const caseSplide2 = document.getElementById('case-splide-2');
	const caseSplide3 = document.getElementById('case-splide-3');
	const caseSplide4 = document.getElementById('case-splide-4');
	const caseSplide5 = document.getElementById('case-splide-5');
	const caseSplide6 = document.getElementById('case-splide-6');
	const caseSplide7 = document.getElementById('case-splide-7');

	const caseDesktopSplide1 = document.getElementById('case-splide-desktop-1');

	if (caseSplide1) {
		const splide1 = new Splide(caseSplide1, {
			arrows: false,
			gap: '15px',
			pagination: false,
			mediaQuery: 'min',
			fixedWidth: '232px'
		}).mount();
	}

	if (caseDesktopSplide1) {
		const splideDesktop1 = new Splide(caseDesktopSplide1, {
			arrows: true,
			pagination: false,
			gap: '15px',
			width: '90%'
		}).mount();
	}

	if (caseSplide2) {
		const splide2 = new Splide(caseSplide2, {
			arrows: false,
			gap: '15px',
			pagination: false,
			fixedWidth: '232px'
		}).mount();
	}

	if (caseSplide3) {
		const splide3 = new Splide(caseSplide3, {
			type: 'fade',
			gap: '15px',
			pagination: false,
			classes: {
				// Add classes for arrows.
				arrows: 'splide-3-arrows'
			}
		}).mount();
	}

	if (caseSplide4) {
		const splide4 = new Splide(caseSplide4, {
			arrows: false,
			gap: '15px',
			pagination: false,
			fixedWidth: '232px'
		}).mount();
	}

	if (caseSplide5) {
		const splide5 = new Splide(caseSplide5, {
			arrows: false,
			gap: '50px',
			pagination: true
		}).mount();
	}

	if (caseSplide6) {
		const splide6 = new Splide(caseSplide6, {
			arrows: false,
			gap: '20px',
			pagination: true
		}).mount();
	}
};

export default initSplide;
