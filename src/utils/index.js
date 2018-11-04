import axios from 'axios';
import moment from 'moment';
import { AUTH_TOKEN } from '../constants';

export const formatDate = (dateStr) => {
	moment.updateLocale('en', {
		weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	});
	const date = new Date(dateStr);
	return moment(date).format('ddd, MMM Do YYYY');
};

export const addToken = () => {
	const TOKEN = localStorage.getItem(AUTH_TOKEN);

	if (TOKEN !== null) {
		axios.defaults.headers.common.Authorization = `Token ${TOKEN}`;
	}
};

export const capitalizeWord = (word) => {

	const first = word.charAt(0).toUpperCase();

	return `${first}${word.slice(1)}`;

};

export const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms));
