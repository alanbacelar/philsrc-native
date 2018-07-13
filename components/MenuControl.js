import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Button from './Button';
import ButtonIcon from './ButtonIcon';
import Api from './Api';

import MenuControlStyle from '../styles/menuControl';

export default class MenuControl extends Component {

  render() {
    return (
      <View style={MenuControlStyle.container}>

        <View style={MenuControlStyle.turnOffContainer}>
          <ButtonIcon onPress={Api.sendKey.bind(this, 'Standby')} icon={require("../resources/images/turn-off.png")} />
        </View>

        <View style={MenuControlStyle.actionsContainer}>
          <View style={MenuControlStyle.actionsView}>
            <Button onPress={Api.sendKey.bind(this, 'Home')} title="home" />
          </View>

          <View style={MenuControlStyle.actionsView}>
            <Button onPress={Api.sendKey.bind(this, 'Source')} title="source" />
          </View>

          <View style={MenuControlStyle.actionsView}>
            <Button onPress={Api.sendKey.bind(this, 'WatchTV')} title="tv" />
          </View>

          {/* <View style={MenuControlStyle.actionsView}>
            <Button onPress={Api.sendKey.bind(this, 'Adjust')} title="ajuste" />
          </View> */}

          <View style={MenuControlStyle.actionsView}>
            <Button onPress={Api.sendKey.bind(this, 'Exit')} title="sair" />
          </View>

        </View>
      </View>
    );
  }
}

