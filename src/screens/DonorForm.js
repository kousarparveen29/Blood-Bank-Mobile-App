
import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Label } from 'native-base';
import database from '@react-native-firebase/database';


class DonorForm extends Component {
  constructor(props) {
    super()
    this.state = {
      donorName: '',
      age: '',
      gender: '',
      bloodGroup: '',
      rhFactor: '',
      mobileNo: '',
      city: ''
    }
  }

  set_donor = () => {
    let donorList = {
      donorName: this.state.donorName,
      age: this.state.age,
      gender: this.state.gender,
      bloodGroup: this.state.bloodGroup,
      rhFactor: this.state.rhFactor,
      mobileNo: this.state.mobileNo,
      city: this.state.city
    }
    if (this.state.donorName !== "" && this.state.age !== "" && this.state.gender !== "" && this.state.bloodGroup !== "" && this.state.rhFactor !== "" && this.state.mobileNo !== "" && this.state.city !== ""){
      database().ref('/').child(`DonorList`).push(donorList).then(()=>{
        alert('You have successfully entered data in donor list')
        this.props.navigation.navigate('DonorList')
      })
    }
    else {
      alert("fill all the fields.");
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
              <Text style={styles.signupTxt}>Blood Donor Form</Text>
              <View>
                <Label style={styles.label}>Full Name</Label>
                <TextInput value={this.state.donorName} onChangeText={(e) => this.setState({ donorName: e })} style={styles.signupInput} placeholder="Enter Your Full Name" />
              </View>
              <View>
                <Label style={styles.label}>Age</Label>
                <TextInput value={this.state.age} onChangeText={(e) => this.setState({ age: e })} style={styles.signupInput} placeholder="Enter Your Age" />
              </View>
              <View>
                <Label style={styles.label}>Gender</Label>
                <TextInput value={this.state.gender} onChangeText={(e) => this.setState({ gender: e })} style={styles.signupInput} placeholder="Enter Your Age" />
              </View>
              <View>
                <Label style={styles.label}>Blood Group</Label>
                <TextInput value={this.state.bloodGroup} onChangeText={(e) => this.setState({ bloodGroup: e })} style={styles.signupInput} placeholder="Enter Your Blood Group (A, B, AB, O)" />
              </View>
              <View>
                <Label style={styles.label}>Rh Factor</Label>
                <TextInput value={this.state.rhFactor} onChangeText={(e) => this.setState({ rhFactor: e })} style={styles.signupInput} placeholder="Enter Rh Factor of your blood (+, -)" />
              </View>
              <View>
                <Label style={styles.label}>Mobile No.</Label>
                <TextInput value={this.state.mobileNo} onChangeText={(e) => this.setState({ mobileNo: e })} style={styles.signupInput} placeholder="Enter Your Mobile No." />
              </View>
              <View>
                <Label style={styles.label}>City</Label>
                <TextInput value={this.state.city} onChangeText={(e) => this.setState({ city: e })} style={styles.signupInput} placeholder="Enter Your City Name" />
              </View>
              <TouchableOpacity onPress={() => this.set_donor()} style={styles.loginBtn}>
                <Text style={styles.btnTxt}>Add Donor</Text>
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





export default DonorForm;