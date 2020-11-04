import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

class TableScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['No', 'Id', 'Name', 'Action'],
      tableData: [[]],
    };
  }

  componentDidMount() {
    this.refresh();
  }

  setTableData = (users) => {
    // Convert data from json to array
    let tableData = [];
    users.map((user, idx) => {
      const dataTemp = [idx + 1, user.id, user.name, ''];
      tableData.push(dataTemp);
    });
    this.setState({tableData});
  };

  _alertIndex(data, index) {
    Alert.alert(`This is row ${index + 1}\nName: ${data[2]}`);
  }

  onPressDeleteHandler = (id) => {
    const {deleteUser} = this.props;
    deleteUser(id);
    this.refresh();
  };

  onPressEditHandler = (data) => {
    this.props.editUser(data, 'Edit');
  };

  showTableData = () => {
    const {tableData} = this.state;

    // Create Button
    const element = (data, index) => (
      <View key={index} style={styles.action}>
        <TouchableOpacity onPress={() => this.onPressEditHandler(data)}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Edit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressDeleteHandler(data[1])}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    );

    // Show data
    return tableData.map((rowData, index) => (
      <TableWrapper key={index} style={styles.row}>
        {rowData.map((cellData, cellIndex) => (
          <Cell
            key={cellIndex}
            data={cellIndex === 3 ? element(rowData, index) : cellData}
            textStyle={styles.text}
          />
        ))}
      </TableWrapper>
    ));
  };

  refresh = () => {
    this.setTableData(this.props.state.users);
    console.log('ini dari TableScreen' + this.props.state.users);
  };

  render() {
    const {tableHead} = this.state;

    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.textHead}>Users Table</Text>
        </View>
        {/* <TouchableOpacity
          onPress={this.refresh}
          style={{marginTop: 20, marginBottom: 20, alignItems: 'center'}}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Refresh</Text>
          </View>
        </TouchableOpacity> */}
        <Table borderStyle={{borderColor: 'transparent'}} style={styles.table}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          {this.showTableData()}
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  textHead: {fontSize: 25, marginBottom: 20},
  head: {height: 40, backgroundColor: '#808B97'},
  text: {margin: 20},
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
  action: {flexDirection: 'column', alignItems: 'center'},
  btn: {
    width: 58,
    height: 18,
    margin: 5,
    backgroundColor: '#78B7BB',
    borderRadius: 2,
  },
  btnText: {textAlign: 'center', color: '#fff'},
});

export default TableScreen;
