import React from 'react';
import { View } from 'react-native';

import Api from './Api';
import Button from './Button';
import ColorButton from './ColorButton';

import ColorControlStyle from '../styles/colorControl';

const ColorControl = () => {
  return (
    <View style={ColorControlStyle.container}>
      <View style={ColorControlStyle.row}>
        <View style={ColorControlStyle.btn_view}>
          <ColorButton onPress={Api.sendKey.bind(this, 'RED_COLOUR')} color="red" />
        </View>

        <View style={ColorControlStyle.btn_view}>
          <ColorButton onPress={Api.sendKey.bind(this, 'GREEN_COLOUR')} color="green" />
        </View>

        <View style={ColorControlStyle.btn_view}>
          <Button onPress={Api.sendKey.bind(this, 'Back')} title="voltar" />
        </View>

        <View style={ColorControlStyle.btn_view}>
          <ColorButton onPress={Api.sendKey.bind(this, 'YELLOW_COLOUR')} color="yellow" />
        </View>

        <View style={ColorControlStyle.btn_view}>
          <ColorButton onPress={Api.sendKey.bind(this, 'BLUE_COLOUR')} color="blue" />
        </View>
      </View>
    </View>
  );
}

export default ColorControl;
