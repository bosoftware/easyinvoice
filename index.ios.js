'use strict';

var React = require('react-native');
var Client = require('./App/Client/Client');
var Invoice = require('./App/Invoice/Invoice');
var SQLite = require('react-native-sqlite-storage');
var Company = require('./App/Company/Company');

var {
  StyleSheet,
    AppRegistry,
    TabBarIOS,
    Component
   } = React;

   var styles = StyleSheet.create({
     icon: {
  width: 15,
  height: 15,
},
   });
class InvoiceGenerate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Client'
        };
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'Client'}
                    //icon={clientIcon}
                    title={'Client'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'Client'
                        });
                    }}>
                    <Client/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'Company'}
                    //icon={{uri:'search'}}
                      title={'Company'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'Company'
                        });
                    }}>
                    <Invoice/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('InvoiceGenerate', () => InvoiceGenerate);
