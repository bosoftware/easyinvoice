'use strict';

var React = require('react-native');
var dbManger = require('react-native').NativeModules.DBManager;
var Invoice = require('../Invoice/Invoice');

var {
    Image,
    StyleSheet,
    Text,
    View,
    Component,
    ListView,
    TouchableHighlight
   } = React;
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    clientName: {
        fontSize: 20,
        marginBottom: 8
    },
    clientAddress: {
        color: '#656565'
    },
    top:{
      //flex: 1,
      //justifyContent: 'center',
      //alignItems: 'flex-start',
      marginTop: 70
    },
    listView: {
       backgroundColor: '#F5FCFF'
   }
});
class ClientList extends Component {
  constructor(props) {
         super(props);
         this.state = {
             isLoading: true,
             dataSource: new ListView.DataSource({
                 rowHasChanged: (row1, row2) => row1 !== row2
             })
         };
     }

     rowPressed(client) {

       this.props.navigator.push({
         title: "Invoice List",
         component: Invoice,
         passProps: {'client': client}
       });
     }

  renderClient(client) {
         return (
              <TouchableHighlight onPress={() => this.rowPressed(client)}
        underlayColor='#dddddd'>
                  <View>
                      <View style={styles.container}>
                          <View style={styles.rightContainer}>
                              <Text style={styles.clientName}>{client.clientName}</Text>
                              <Text style={styles.clientAddress}>{client.clientAddress}</Text>
                          </View>
                      </View>
                      <View style={styles.separator} />
                  </View>
              </TouchableHighlight>
         );
     }

     componentDidMount() {

       dbManger.getAllClients((error, clients) => {
 if (error) {
   console.error(error);
 } else {
   this.setState({
     'dataSource': this.state.dataSource.cloneWithRows(clients)
   });
 }
 });

        }

    render() {

        return (
          <ListView
               dataSource={this.state.dataSource}
               renderRow={this.renderClient.bind(this)}
               style={styles.listView}
               />
        );
    }
}
module.exports=ClientList;
