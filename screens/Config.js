import React from 'react';
import { observer, inject } from 'mobx-react';
import { StackNavigator } from 'react-navigation';

import { View, Text, TextInput, AsyncStorage } from 'react-native';

import Styles from '../styles/config';
import Api from '../components/Api';
import Button from '../components/Button';

class ConfigScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { tv_ip: null };
    }

    static navigationOptions = {
        title: 'Configurações'
    };

    async componentDidMount() {
        const tv_ip = await Api.getTVIp();
        this.setState({ tv_ip });
    }

    async save() {
        const { goBack } = this.props.navigation;    

        try {
          await AsyncStorage.setItem(Api.TV_IP_KEY, this.state.tv_ip);
          goBack();
        } catch (error) {
          alert('Falha ao salvar o IP');
        }
    }

    onChangeText(tv_ip) {
        this.setState({tv_ip});
    }

    render() {
        const IP = Api.getTVIp();

        return (
            <View style={Styles.container}>
                <Text style={Styles.text}>Endereço IP:</Text>

                <TextInput 
                    style={Styles.input} 
                    value={this.state.tv_ip} 
                    onChangeText={this.onChangeText.bind(this)} />

                <Button onPress={this.save.bind(this)} title="Salvar" />
            </View>
        );
    }
}

let container = observer(ConfigScreen);
container = inject(['tv_store'])(container);

export default container;


