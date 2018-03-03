import { extendObservable, action } from 'mobx';
import { AsyncStorage } from 'react-native';
import Api from '../components/Api';

class TVStore {
    constructor() {
        extendObservable(this, {
            channels: [],

            channel: null,
            volume: null,

            fail_to_connected: false,

            fetchVolume: action(this.fetchVolume.bind(this)),
            fetchChannel: action(this.fetchChannel.bind(this)),
        });
    }

    async fetchChannels() {
        const response = await Api.getChannels();

        if (response.status === 200) {
            this.channels = response.data;
            this.fail_to_connected = false;

            this.fetchChannel();
        } else {
            this.fail_to_connected = true;
        }

        return response;
    }

    async fetchChannel() {
        const response = await Api.getChannel();

        if (response.status === 200) {
            const id = response.data.id.replace('0_', '');
            this.fail_to_connected = false;
        } else {
            this.fail_to_connected = true;
        }

        return response;
    }

    async fetchVolume() {
        const response = await Api.getVolume();
        
        if (response.status === 200) {
            this.volume = response.data;
            this.fail_to_connected = false;
        } else {
            this.fail_to_connected = true;
        }

        return response;
    }

}

export default new TVStore();
