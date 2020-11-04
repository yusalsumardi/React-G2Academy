import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

export default class AlbumScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // user list loading
      isRefreshing: false, //for pull to refresh
      isLoading: true,
      dataSource: [],
    };
  }
  _onPressButton() {
    alert('You tapped the button!');
  }

  componentDidMount() {
    const fatchItem = async () => {
      try {
        this.setState({isLoading: true});
        console.log(this.state.isLoading);
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?_start=0&_limit=20`,
        );
        let responseJson = await response.json();
        await this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
        console.log(responseJson);
      } catch (error) {
        console.error(error);
      }
    };
    fatchItem();
  }

  _separatorComponent = () => {
    return <View style={{backgroundColor: 'grey', height: 0.5}} />;
  };

  onPressAlbumHandler = (album) => {
    this.props.navigation.navigate('PhotoScreen', {
      // Navigation target
      album: album, // Send params
    });
  };

  _itemComponent = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.onPressAlbumHandler(item)}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginLeft: 10,
            height: 65,
            padding: 5,
          }}>
          <View style={style.item}>
            <Text style={{padding: 3, paddingLeft: 10}}>{item.id}</Text>
            <Text style={{padding: 3, paddingLeft: 10}}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  onRefresh() {
    this.setState({isRefreshing: true});
    const fatchItem = async () => {
      try {
        this.setState({isLoading: true});
        console.log(this.state.isLoading);
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?_start=0&_limit=20`,
        );
        let responseJson = await response.json();
        await this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
        console.log(responseJson);
      } catch (error) {
        this.setState({
          isRefreshing: false,
          error: 'Something just went wrong',
        });
      }
    };
    fatchItem();
  }

  handleLoadMore = () => {
    if (!this.state.loading) {
      this.page = this.page + 1; // increase page by 1
      this.fetchUser(this.page); // method for API call
    }
  };

  fetchUser(page) {
    this.setState({loading: true});
    const fatchItem = async () => {
      try {
        this.setState({isLoading: true});
        console.log(this.state.isLoading);
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?_start=0&_limit=20`,
        );
        let responseJson = await response.json();
        await this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
        console.log(responseJson);
      } catch (error) {
        this.setState({
          isRefreshing: false,
          error: 'Something just went wrong',
        });
      }
    };
    fatchItem();
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  renderFooter = () => {
    //it will show indicator at the bottom of the list when data is loading otherwise it returns null
    if (!this.state.loading) return null;
    return <ActivityIndicator style={{color: '#000'}} />;
  };

  render() {
    const imgbg = {
      uri:
        'https://images.unsplash.com/photo-1587358538793-a4d9b21f5dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    };

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
          <StatusBar barStyle="dark-content" />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>User List</Text>
            <Text>Gagal Ambil</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <StatusBar barStyle="dark-content" />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
            Album
          </Text>
        </View>
        <FlatList
          data={this.state.dataSource}
          renderItem={this._itemComponent}
          keyExtractor={(item, index) => index.toString()}
          onRefresh={this._fetchItem}
          refreshing={this.state.isLoading}
          ItemSeparatorComponent={this._separatorComponent}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter.bind(this)}
          onEndReachedThreshold={0.4}
          onEndReached={this.handleLoadMore.bind(this)}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-start',
  },
  item: {
    backgroundColor: '#aaa',
    flex: 1,
    marginRight: 10,
    borderRadius: 10,
  },
  buttonitem: {
    justifyContent: 'flex-end',
    width: 30,
    flex: 5,
  },
});
