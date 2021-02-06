
import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { Label } from 'native-base';
import database from '@react-native-firebase/database'

class Signup extends Component {
  constructor(props){
    super()
    this.state = {
        fullName: '',
        email: '',
        password: '',
        reEnterPass: ''
    }
}

send_data = () => {
    let user = {
        fullName: this.state.fullName,
        email: this.state.email,
        password: this.state.password
    }
    if (this.state.fullName !== "" && this.state.email !== "" && this.state.password !== "" && this.state.passwordAgain !== ""){
      if(this.state.password === this.state.reEnterPass){
        database().ref('/').child(`users`).push(user).then(()=>{
          alert('You have successfully Sign Up')
        })
        .then(()=>{this.props.navigation.navigate('Home')})
      }
      else{
        alert('You have re-entered wrong password')
      }
    }
    else {
      alert("Fill all the fields.")
    }
}


  render() {
    return (
      <>
      <ScrollView style={styles.header}>
        <View>
          <View style={styles.title}>
            <Image style={styles.logoImg} source={require('../assets/logo.png')} />
            <Text style={styles.titleTxt}>Blood Donation App</Text>
          </View>
          <View style={styles.signupForm}>
            <Text style={styles.signupTxt}>Sign Up Form For New User</Text>
            <View>
              <Label style={styles.label}>Full Name</Label>
              <TextInput value={this.state.fullName} onChangeText={(e)=>this.setState({fullName: e})} style={styles.signupInput} placeholder="Enter Your Full Name" />
            </View>
            <View>
              <Label style={styles.label}>Email Address</Label>
              <TextInput value={this.state.email} onChangeText={(e)=>this.setState({email: e})} style={styles.signupInput} placeholder="Enter Your Email Address" />
            </View>
            <View>
              <Label style={styles.label}>Password</Label>
              <TextInput secureTextEntry={true} value={this.state.password} onChangeText={(e)=>this.setState({password: e})} style={styles.signupInput} placeholder="Enter Password" />
            </View>
            <View>
              <Label style={styles.label}>Re-enter Password</Label>
              <TextInput secureTextEntry={true} value={this.state.reEnterPass} onChangeText={(e)=>this.setState({reEnterPass: e})} style={styles.signupInput} placeholder="Enter Your Password Again" />
            </View>
            <TouchableOpacity onPress={()=>this.send_data()} style={styles.loginBtn}>
              <Text style={styles.btnTxt}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#d9d9d9',
    flex: 1
  },
  title: {
    backgroundColor: '#e60000',
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#800000',
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row'
  },
  titleTxt: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700'
  },
  logoImg: {
    width: 60,
    height: 60,
    marginHorizontal: 8
  },
  signupForm: {
    backgroundColor: '#ffebe6',
    borderWidth: 2,
    margin: 10,
    padding: 5,
    borderRadius: 15,
    borderColor: '#800000'
  },
  signupTxt: {
    color: '#e60000',
    fontSize: 25,
    paddingVertical: 15,
    textDecorationLine: 'underline',
    fontWeight: '700',
    textAlign: 'center'
  },
  signupInput: {
    borderBottomWidth: 2,
    borderColor: '#800000',
    fontSize: 16,
    marginVertical: 5
  },
  label: {
    color: '#e60000',
    fontSize: 18
  },
  loginBtn: {
    backgroundColor: '#e60000',
    borderRadius: 7,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 10,
    borderColor: '#800000',
    borderWidth: 2,
  },
  btnTxt: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  }
});

export default Signup;