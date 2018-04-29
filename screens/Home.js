import React from 'react';
import { observer, inject } from 'mobx-react';
import { StackNavigator } from 'react-navigation';

import { ScrollView, View, Text } from 'react-native';

import MenuControl from '../components/MenuControl';
import MoveControl from '../components/MoveControl';
import ColorControl from '../components/ColorControl';
import VolumeControl from '../components/VolumeControl';
import ChannelControl from '../components/ChannelControl';
import ConfigControl from '../components/ConfigControl';

import Styles from '../styles/home';

class HomeScreen extends React.Component {

    static navigationOptions = {
        header: null,
        title: 'Philips Controle',
    };

    async componentDidMount() {
        await this.syncTV();
    }

    async syncTV() {
        const tv_store = this.props.tv_store;

        try {
            const response = await tv_store.fetchVolume();

            if (response.status === 200) {
                tv_store.fail_to_connected = false;
            } else {
                tv_store.fail_to_connected = true;
            }
        } catch (error) {
            tv_store.fail_to_connected = true;
        }

        setTimeout(() => {
            this.syncTV();
        }, 10000);
    }

    getFailMessage() {
        const tv_store = this.props.tv_store;

        if (!tv_store.fail_to_connected) {
            return null;
        }

        return (
            <View style={Styles.connected_fail}>
                <Text style={Styles.connected_fail_text}>Falha ao conectar a tv!</Text>
            </View>
        );
    }
  
    render() {
        return (
            <ScrollView style={Styles.main}>
                <View style={Styles.container}>
                    <MenuControl />
                    <MoveControl />
                    <ColorControl />
                    <VolumeControl />
                    <ChannelControl />
                    <ConfigControl navigation={this.props.navigation} />

                    {this.getFailMessage()}
                </View>
            </ScrollView>
        );
    }
}

let container = observer(HomeScreen);
container = inject(['tv_store'])(container);

export default container;


