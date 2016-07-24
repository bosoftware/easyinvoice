'use strict';

var React = require('react-native');
var ClientList = require('./ClientList');
var AddEditClient = require('./AddEditClient');
var dbManger = require('react-native').NativeModules.DBManager;
var {
    StyleSheet,
    View,
    Text,
    NavigatorIOS,
    Component,
    AlertIOS
   } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Client extends Component {


  constructor(props) {
         super(props);
         this.state = {

             }
         };



  updateClient(param){
    console.log("update");
    param.parent.setState({'clientName':param.clientName});
    param.parent.setState({'clientEmail':param.clientEmail});
    param.parent.setState({'clientAddress':param.clientAddress});
    param.parent.setState({'clientPhone':param.clientPhone});
    param.parent.setState({'clientCity':param.clientCity});
    param.parent.setState({'clientState':param.clientState});
    param.parent.setState({'clientPostCode':param.clientPostCode});


  }
  saveClient(){
    if (!this.state.clientName||this.state.clientName.length==0){
      AlertIOS.alert(
          'Sorry, the client name cannot be empty',
          null,
          [
            {text: 'Cancel', onPress: () => console.log('Cancel'), style: 'cancel'}
          ]
        )
      }else if (!this.state.clientEmail||this.state.clientEmail.length==0) {
        AlertIOS.alert(
            'Sorry, the client email cannot be empty',
            null,
            [
              {text: 'Cancel', onPress: () => console.log('Cancel'), style: 'cancel'}
            ]
          )
      }else if (!this.state.clientAddress||this.state.clientAddress.length==0) {
        AlertIOS.alert(
            'Sorry, the client address cannot be empty',
            null,
            [
              {text: 'Cancel', onPress: () => console.log('Cancel'), style: 'cancel'}
            ]
          )
      }
      dbManger.saveClient('',this.state.clientName,this.state.clientEmail,this.state.clientPhone,this.state.clientAddress,this.state.clientCity,this.state.clientState,
      this.state.clientPostCode);
      this.refs.nav.navigator.pop();
    }
    render() {
        return (
          <NavigatorIOS
                  ref="nav"
                  style={styles.container}
                  initialRoute={{
              title: 'Clients',
              leftButtonIcon:{uri:'add'},
              leftButtonTitle:'Add',
              component: ClientList,
              onLeftButtonPress:()=>{
                this.refs.nav.navigator.push({
                  title:"Add new client",
                  component:AddEditClient,
                  leftButtonTitle:'Back',
                  onLeftButtonPress:()=>{this.refs.nav.navigator.pop();},
                  rightButtonTitle:'Save',
                  onRightButtonPress:()=>{this.saveClient();},
                  passProps:{
                    onUpdateClient:this.updateClient,
                    parent:this
                  }
                });
              }
              }}

              />
        );
    }
}

module.exports = Client;
