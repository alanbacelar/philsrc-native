import React from 'react';
import { View } from 'react-native';

import Api from './Api';
import Button from './Button';
import ButtonIcon from './ButtonIcon';

import MoveControlStyle from '../styles/moveControl';

const MoveControl = () => {
  return (
    <View style={MoveControlStyle.container}>
      <View style={MoveControlStyle.row}>
        <View style={MoveControlStyle.btn_view}>
          <ButtonIcon onPress={Api.sendKey.bind(this, 'CursorUp')} icon={require("../resources/images/arrow_top.png")} />
        </View>

      </View>

      <View style={MoveControlStyle.row}>
        <View style={MoveControlStyle.btn_view}>
          <ButtonIcon onPress={Api.sendKey.bind(this, 'CursorLeft')} icon={require("../resources/images/arrow_left.png")} />
        </View>

        <View style={MoveControlStyle.btn_view}>
          <Button onPress={Api.sendKey.bind(this, 'Confirm')} title="OK" />
        </View>

        <View style={MoveControlStyle.btn_view}>
          <ButtonIcon onPress={Api.sendKey.bind(this, 'CursorRight')} icon={require("../resources/images/arrow_right.png")} />
        </View>

      </View>

      <View style={MoveControlStyle.row}>
        <View style={MoveControlStyle.btn_view}>
          <ButtonIcon onPress={Api.sendKey.bind(this, 'CursorDown')} icon={require("../resources/images/arrow_bottom.png")} />
        </View>
      </View>

      <View style={MoveControlStyle.row}>
        <View style={MoveControlStyle.btn_view}>
          <Button onPress={Api.sendKey.bind(this, 'Back')} title="voltar" />
        </View>
      </View>
    </View>
  );
}

export default MoveControl;
