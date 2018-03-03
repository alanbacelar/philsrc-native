import React from 'react';
import { Image, TouchableHighlight } from 'react-native';

import ButtonIconStyle from '../styles/buttonIcon';

const ButtonIcon = ({icon, onPress}) => {
	return (
		<TouchableHighlight onPress={onPress}>
			<Image source={icon} />
		</TouchableHighlight>
	);
}

export default ButtonIcon;
