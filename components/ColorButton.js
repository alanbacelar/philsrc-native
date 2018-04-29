import React from 'react';
import { View, TouchableHighlight } from 'react-native';

import ColorButtonStyle from '../styles/colorButton';

const ColorButton = ({color, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress}>
    	<View style={[ColorButtonStyle[color], ColorButtonStyle.box]}></View>
    </TouchableHighlight>
  );
}

export default ColorButton;
