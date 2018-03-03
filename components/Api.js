import axios from 'axios';
import { AsyncStorage } from 'react-native';

const TV_IP_KEY = 'TV_IP_KEY';

const api = axios.create({
	timeout: 1000
});

const ApiHelper = {
	TV_IP_KEY: TV_IP_KEY,

	getTVIp: async () => {
		const IP = await AsyncStorage.getItem(TV_IP_KEY) || '192.168.15.1';
		return IP;
	},

	getBaseURL: async () => {
		const IP = await ApiHelper.getTVIp();
		return `http://${IP}:1925/1`;
	},

	getSystemInfo: async () => {
		const url = await ApiHelper.getBaseURL();
		return api.get(url + '/system');
	},

	setVolume: async (current, muded = false) => {
		const url = await ApiHelper.getBaseURL();
		return api.post(url + '/audio/volume', {current, muded});
	},

	getChannel: async () => {
		console.log('fetching channel');
		
		const url = await ApiHelper.getBaseURL();
		return api.get(url + '/channels/current');
	},

	getChannels: async () => {
		console.log('fetching channels');

		const url = await ApiHelper.getBaseURL();
		return api.get(url + '/channels');
	},

	getVolume: async () => {
		console.log('fetching volume');

		const url = await ApiHelper.getBaseURL();
		return api.get(url + '/audio/volume');
	},

	sendKey: async (key) => {
		console.log('sendKey:', key);
		const url = await ApiHelper.getBaseURL();
		const instance = api.post(url + '/input/key', {key});

		instance.then((response) => {
	      console.log(key, 'OK');
	    }).catch((error) => {
	      console.log(key, error.status, error);
	      // alert('Não consegui enviar o comando!');
	    });

	    return instance;
	}
}

export default ApiHelper;