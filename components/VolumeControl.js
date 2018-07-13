import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { Text, View } from 'react-native';

import Api from './Api';
import Button from './Button';

import VolumeControlStyle from '../styles/volumeControl';

const VolumeControl = ({ tv_store }) => {
  const volume = tv_store.volume || {};

  const sendKey = key => {
    Api.sendKey(key).then(res => tv_store.fetchVolume());
  }

  return (
    <View style={VolumeControlStyle.container}>
      <View style={VolumeControlStyle.buttonView}>
        <Button onPress={sendKey.bind(this, 'VolumeDown')} title="VOL-" />
      </View>

      <View style={VolumeControlStyle.buttonView}>
        <Text style={VolumeControlStyle.centralText}>{volume.current}</Text>
      </View>

      <View style={VolumeControlStyle.buttonView}>
        <Button onPress={sendKey.bind(this, 'VolumeUp')} title="VOL+" />
      </View>

    </View>
  );
}

let container = observer(VolumeControl);
container = inject(['tv_store'])(container);

export default container;
