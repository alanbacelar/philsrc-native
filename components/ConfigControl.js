import React, { Component } from 'react';

import { View } from 'react-native';
import Button from './Button';
import ConfigControlStyle from '../styles/configControlStyle';

const ConfigControl = ({ navigation }) => {

    const { navigate } = navigation;
    const onPress = () => navigate('Config');

    return (
        <View style={ConfigControlStyle.container}>
            <Button title="configurações" onPress={onPress} />
        </View>
    );
}

export default ConfigControl;

