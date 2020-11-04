/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Login from './src/pages/Login/Login';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Album from './src/pages/Album/Album';
import HomeScreen from './src/pages/Home/Home';
import {View, Button} from 'react-native';
import Home from './src/component/BotNavBar/BotNavBar';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Logout from './src/pages/Logout/Logout';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'admin',
      password: 'admin',
      isLogin: false,
    };
  }

  authStatusLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    });
    if (this.state.isLogin) {
      alert('Keluar nih');
    } else {
      alert('Masuk nih');
    }
  };

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {!this.state.isLogin ? (
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                options={{
                  headerShown: false,
                }}>
                {(props) => (
                  <Login {...props} fnAuthStatusLogin={this.authStatusLogin} />
                )}
              </Stack.Screen>
            </Stack.Navigator>
          ) : (
            <Drawer.Navigator>
              <Drawer.Screen name="Home" component={Home} />
              {/* <Drawer.Screen name="Album" component={Album} />
              <Drawer.Screen name="HomeScreen" component={HomeScreen} /> */}
              <Drawer.Screen
                name="Logout"
                children={(props) => (
                  <Logout {...props} fnAuthStatusLogin={this.authStatusLogin} />
                )}
              />
            </Drawer.Navigator>
          )}
        </NavigationContainer>
      </ApplicationProvider>
    );
  }
}

export default App;
