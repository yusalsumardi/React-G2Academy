import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home/Home';
import Album from '../../pages/Album/Album';
import InputData from '../../pages/InputData/InputData';
import TableScreen from '../../pages/TableScreen/TableScreen';

const Tab = createBottomTabNavigator();

class BotNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: 'Ariella Calista',
          picture: 'https://jkt48.com/profile/ariel.jpg?r=20170308',
        },
        {
          id: 2,
          name: 'Eve Antoinette',
          picture: 'https://jkt48.com/profile/eve_antoinette.jpg?r=20170308',
        },
      ],
    };
    // console.log(this.props);
  }

  addUser = (user) => {
    let {users} = this.state;
    users.push(user);
    this.setState({users});
  };

  deleteUser = (id) => {
    // alert(id)
    let {users} = this.state;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users.splice(i, 1);
      }
    }
    this.setState({users});
  };

  editUser = (data, typeData) => {
    console.log(data + typeData);
    this.props.navigation.navigate('Inputdata', {data, typeData});
  };

  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Home"
          children={() => <Home users={this.state.users} />}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: (props) => <IconBottom image={images.homeImage} />,
          }}
        />
        <Tab.Screen
          name="Inputdata"
          children={() => <InputData addUser={this.addUser} />}
          options={{
            tabBarLabel: 'Add User',
            tabBarIcon: (props) => <IconBottom image={images.inputData} />,
          }}
        />
        <Tab.Screen
          name="Tablescreen"
          children={() => (
            <TableScreen
              state={this.state}
              deleteUser={this.deleteUser}
              editUser={this.editUser}
            />
          )}
          options={{
            tabBarLabel: 'Table',
            tabBarIcon: (props) => <IconBottom image={images.tableImage} />,
          }}
        />
        <Tab.Screen
          name="Album"
          component={Album}
          options={{
            tabBarLabel: 'Album',
            tabBarIcon: (props) => <IconBottom image={images.albumImage} />,
          }}
        />
      </Tab.Navigator>
    );
  }
}

const IconBottom = (props) => {
  return (
    <View>
      <Image
        source={props.image}
        style={{width: 25, height: 25, tintColor: 'grey'}}
      />
    </View>
  );
};

// For images
const images = {
  homeImage: require('../../asset/image/home.png'),
  tableImage: require('../../asset/image/list.png'),
  inputData: require('../../asset/image/input.png'),
  albumImage: require('../../asset/image/album.png'),
};

export default BotNavBar;
