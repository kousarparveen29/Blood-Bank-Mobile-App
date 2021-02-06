
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { useLinkProps } from '@react-navigation/native';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import database from '@react-native-firebase/database'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  log_in = () => {
    let loginUser = {};
    database().ref('/').child('users').on('child_added', (data) => {
      loginUser = data.val();
      if (loginUser.email === this.state.email) {
        if (loginUser.password === this.state.password) {
          this.props.navigation.navigate('DonorList');
        }
      }
    })
    if (this.state.email === '') {
      alert('Enter Your Email')
    }
    if (this.state.password === '') {
      alert('Enter Your Password')
    }
  }

  render() {
    return (
      <><ScrollView style={styles.header}>
        <View style={styles.header}>
          <View style={styles.title}>
            <Image style={styles.logoImg} source={require('../assets/logo.png')} />
            <Text style={styles.titleTxt}>Blood Donation App</Text>
          </View>
          <View style={styles.loginForm}>
            <Text style={styles.loginTxt}>LOGIN</Text>
            <TextInput textContentType='emailAddress' value={this.state.email} onChangeText={(e) => this.setState({ email: e })} style={styles.loginInput} placeholder="Enter Your Email" />
            <TextInput secureTextEntry value={this.state.password} onChangeText={(e) => this.setState({ password: e })} style={styles.loginInput} placeholder="Enter Your Password" />
            <TouchableOpacity onPress={() => this.log_in()} style={styles.loginBtn}>
              <Text style={styles.btnTxt}>Log in</Text>
            </TouchableOpacity>
            <Text onPress={() => this.props.navigation.navigate('Signup')} style={styles.newUser}>Sign Up for New User</Text>
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
    marginTop: 10
  },
  titleTxt: {
    fontSize: 33,
    color: 'white',
    fontWeight: '700'
  },
  logoImg: {
    width: 150,
    height: 150,
  },
  loginForm: {
    backgroundColor: '#ffebe6',
    borderWidth: 2,
    margin: 10,
    padding: 5,
    borderRadius: 15,
    borderColor: '#800000'
  },
  loginTxt: {
    color: '#e60000',
    fontSize: 22,
    padding: 10,
    textDecorationLine: 'underline',
    fontWeight: '700'
  },
  loginInput: {
    borderBottomWidth: 2,
    borderColor: '#800000',
    fontSize: 16,
    marginVertical: 5
  },
  newUser: {
    fontSize: 17,
    textAlign: 'right',
    marginRight: 10,
    marginBottom: 10,
    color: '#0073e6'
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



export default Home;
