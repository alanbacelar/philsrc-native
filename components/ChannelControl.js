import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { Text, View } from 'react-native';

import Api from './Api';
import Button from './Button';

import channelControlStyle from '../styles/volumeControl';

const ChannelControl = ({tv_store}) => {
  return (
    <View style={channelControlStyle.container}>
      <View style={channelControlStyle.buttonView}>
        <Button onPress={Api.sendKey.bind(this, 'ChannelStepDown')} title="CH-" />
      </View>

      <View style={channelControlStyle.buttonView}>
        <Text style={channelControlStyle.centralText}>{tv_store.channel}</Text>
      </View>

      <View style={channelControlStyle.buttonView}>
        <Button onPress={Api.sendKey.bind(this, 'ChannelStepUp')} title="CH+" />
      </View>

    </View>
  );
}

let container = observer(ChannelControl);
container = inject(['tv_store'])(container);

export default container;
