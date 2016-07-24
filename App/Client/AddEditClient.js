'use strict';

var React = require('react-native');


var {
    StyleSheet,
    View,
    Text,
    TextInput,
    NavigatorIOS,
    Component,
    ScrollView
   } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70,
        padding:10
    },
    label:{
      padding:5,
      fontSize:20
    },
    input:{
      borderWidth:1,
      borderColor:'gray',
      height:40
    }
});

class AddEditClient extends Component {

   updateClient(){
     var obj = this.props.onUpdateClient;
     obj({
       'parent':this.props.parent,
       'clientName':this.state.clientName,
       'clientEmail':this.state.clientEmail,
       'clientAddress':this.state.clientAddress,
       'clientPhone':this.state.clientPhone,
       'clientCity':this.state.clientCity,
       'clientState':this.state.clientState,
       'clientPostCode':this.state.clientPostCode
     });
   }

    render() {
      var client = this.props.client;
      var clientName = (typeof client!== 'undefined')?client.clientName:'';
      var clientEmail = (typeof client!== 'undefined')?client.clientEmail:'';
      var clientAddress = (typeof client!== 'undefined')?client.clientAddress:'';
      var clientPhone = (typeof client!== 'undefined')?client.clientPhone:'';
      var clientCity = (typeof client!== 'undefined')?client.clientCity:'';
      var clientState = (typeof client!== 'undefined')?client.clientState:'';
      var clientPostCode = (typeof client!== 'undefined')?client.clientPostCode:'';
        return (
          <ScrollView style={styles.container}>
            <Text style={styles.label}>Client Name</Text>
            <TextInput
              style={styles.input}
                onChangeText={(text)=>{
                  this.setState({'clientName':text});
                  this.updateClient();
                }
              }
                value={clientName}
                placeholder={'Please input the client name'}
            />
            <Text style={styles.label}>Client Email Address</Text>
            <TextInput
              style={styles.input}
                onChangeText={(text)=>{
                  this.setState({'clientEmail':text});
                  this.updateClient();
                }
              }
                value={clientEmail}
                placeholder={'Please input the client email address'}
            />
            <Text style={styles.label}>Client Phone</Text>
            <TextInput
              style={styles.input}
                onChangeText={(text)=>{
                  this.setState({'clientPhone':text});
                  this.updateClient();
                }
              }
                value={clientPhone}
                placeholder={'Please input the client phone'}
            />
            <Text style={styles.label}>Client Address</Text>
            <TextInput
              style={styles.input}
                onChangeText={(text)=>{
                    this.setState({'clientAddress':text});
                    this.updateClient();
                  }
                }
                value={clientAddress}
                placeholder={'Please input the client address'}
            />
            <Text style={styles.label}>Client City</Text>
            <TextInput
              style={styles.input}
                onChangeText={(text)=>{
                  this.setState({'clientCity':text});
                  this.updateClient();
                }
              }
                value={clientCity}
                placeholder={'Please input the client city'}
            />
            <Text style={styles.label}>Client State</Text>
            <TextInput
              style={styles.input}
                onChangeText={(text)=>{
                  this.setState({'clientState':text});
                  this.updateClient();
                }
              }
                value={clientState}
                placeholder={'Please input the state'}
            />
            <Text style={styles.label}>Client Post Code</Text>
            <TextInput
              style={styles.input}
                onChangeText={(text)=>{
                  this.setState({'clientPostCode':text});
                  this.updateClient();
                }
              }
                value={clientPostCode}
                placeholder={'Please input the post code'}
            />
          </ScrollView>
        );
    }
}

module.exports = AddEditClient;
