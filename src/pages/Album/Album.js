import React, {Component} from 'react';
import AlbumScreen from './AlbumScreen/AlbumScreen';
import PhotoScreen from './PhotoScreen/PhotoScreen';
import {createStackNavigator} from '@react-navigation/stack';

const StackAlbum = createStackNavigator();

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StackAlbum.Navigator initialRouteName="AlbumScreen">
        <StackAlbum.Screen name="AlbumScreen" component={AlbumScreen} />
        <StackAlbum.Screen
          name="PhotoScreen"
          component={PhotoScreen}
          options={{
            headerShown: true,
          }}
        />
      </StackAlbum.Navigator>
    );
  }
}
