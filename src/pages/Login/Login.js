import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  Button,
  Text,
  Alert,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  authLogin = () => {
    const {navigation} = this.props;
    if (this.state.username == 'admin' && this.state.password == 'admin') {
      this.props.fnAuthStatusLogin();
    } else {
      return alert('Invalid Username or Password');
    }
  };

  render() {
    const imgbg = {
      uri:
        'https://images.unsplash.com/photo-1565606828779-c11662e38bcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    };
    return (
      <ImageBackground source={imgbg} style={style.container}>
        <View style={style.card}>
          <View>
            <Text
              style={{fontSize: 30, fontWeight: 'bold', marginVertical: 20}}>
              Login
            </Text>
          </View>
          <View style={style.formGroup}>
            <View>
              <Text style={style.label}>Username</Text>
              <TextInput
                style={style.formControl}
                placeholder="Masukan Username"
                name="username"
                onChangeText={(username) => this.setState({username})}
              />
            </View>
            <View>
              <Text style={style.label}>Password</Text>
              <TextInput
                name="password"
                secureTextEntry={true}
                textContentType="password"
                style={style.formControl}
                placeholder="Masukan Password"
                onChangeText={(password) => this.setState({password})}
              />
            </View>
            <View accessibilityRole="button" style={style.formGroup}>
              <Button title="Login" color="#3498db" onPress={this.authLogin} />
              <Text style={{marginTop: 10}}>
                Forget Password?
                <Text style={{color: '#3498db'}}>Reset Password</Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 80,
    margin: 20,
  },
  formGroup: {
    marginBottom: 10,
  },
  formControl: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
});
