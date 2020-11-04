import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Input} from '@ui-kitten/components';
import ImagePicker from 'react-native-image-picker';

class InputData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      picture: '',
      resourcePath: {},
    };
  }

  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
      }
    });
  };

  componentDidMount() {
    console.log(
      'ini dari TableScreen ke Input data' + JSON.stringify(this.props.data),
    );
  }

  onPressHandler = () => {
    // Alert.alert("Clicked")
    const {addUser} = this.props;
    const {id, name, picture} = this.state;
    addUser({id, name, picture});
    Alert.alert('Add User Complete');
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textHead}>User Form</Text>
          <Input
            placeholder="ID"
            accessoryLeft={() => (
              <Image style={styles.inputIcon} source={images.idImage} />
            )}
            selectTextOnFocus={true}
            onChangeText={(id) => this.setState({id})}
          />
          <Input
            placeholder="Name"
            accessoryLeft={() => (
              <Image style={styles.inputIcon} source={images.nameImage} />
            )}
            selectTextOnFocus={true}
            onChangeText={(name) => this.setState({name})}
          />
          <Input
            placeholder="Picture Link"
            accessoryLeft={() => (
              <Image style={styles.inputIcon} source={images.pictureImage} />
            )}
            selectTextOnFocus={true}
            onChangeText={(picture) => this.setState({picture})}
            contextMenuHidden={false} // show menu
          />
          <TouchableOpacity style={styles.button} onPress={this.onPressHandler}>
            <Text>Add User</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.selectFile}>
            <Text>Add Photo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

// For images
const images = {
  idImage: require('../../asset/image/id.png'),
  nameImage: require('../../asset/image/name.png'),
  pictureImage: require('../../asset/image/picture.png'),
};

// For styling
const styles = StyleSheet.create({
  textHead: {fontSize: 25},
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  inputIcon: {width: 25, height: 25, marginRight: 10},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default InputData;
