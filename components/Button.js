import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import ButtonStyle from '../styles/button';

const Button = ({title, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text style={ButtonStyle.text}>{title}</Text>
    </TouchableHighlight>
  );
}

export default Button;
