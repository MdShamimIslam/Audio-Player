import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'mp3player-block') },
	{ name: 'style', title: __('Style', 'mp3player-block') }
];

export const songSlOptions = [
	{ label: 'Default', value: 'default' },
	{ label: 'Slider', value: 'slider' }
]

export const musicAlignOptions = [
	{ label: 'Left', value: 'start' },
	{ label: 'Center', value: 'center' },
	{ label: 'Right', value: 'end' },
]