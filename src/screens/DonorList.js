import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import database from '@react-native-firebase/database'
import { Header, Item, Icon, Input } from 'native-base';

class DonorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: [],
            filterBloodGroup: '',
            searchData: []
        }
    }

    goto_donorform = () => {
        this.props.navigation.navigate('DonorForm')
    }

    componentDidMount() {
        database().ref('/').child(`DonorList`).on("child_added", (data) => {
            let alldata = data.val()
            this.setState({ details: [alldata, ...this.state.details]})
        })
    }

    searchBlood = () => {
        database().ref('/').child(`DonorList`).on("child_added", (data) => {
            let searchBloodGroup = data.val()
            if(searchBloodGroup.bloodGroup === this.state.filterBloodGroup){
               
                this.setState({
                    searchData: [...this.state.searchData,searchBloodGroup]
                })
            }
        })
        this.setState({
            searchData : []
        })
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
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.searchBox}>
                            <FontAwesome5 name='search' style={{ fontSize: 21, marginHorizontal: 8, marginTop: 3 }} />
                            <TextInput onChange={()=>this.searchBlood()} value={this.state.filterBloodGroup} onChangeText={(e)=>this.setState({filterBloodGroup: e})} placeholder='Search' style={{ padding: 0, fontSize: 21 }} />
                        </View>
                        <View style={styles.donorBox}>
                            <TouchableOpacity onPress={() => this.goto_donorform()}>
                                <Text style={styles.donorBoxTxt}>Donate Blood</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {(this.state.filterBloodGroup === '') ? 
                    this.state.details.map((v, i) => (
                        <View key={i} style={styles.cardBox}>
                            <View style={styles.bloodBox}>
                                <Text style={styles.bloodBoxTxt}>{v.bloodGroup + v.rhFactor}</Text>
                            </View >
                            <View style={styles.detailBox}>
                                <Text style={styles.detailBoxName}>{v.donorName}</Text>
                                <Text style={styles.detailBoxTxt}>Age: {v.age}</Text>
                                <Text style={styles.detailBoxTxt}>Mobile No: {v.mobileNo}</Text>
                                <Text style={styles.detailBoxTxt}>Gender: {v.gender}</Text>
                                <Text style={styles.detailBoxTxt}>City: {v.city}</Text>     
                            </View>
                        </View>
                    ))
                    : 
                    this.state.searchData.map((v, i) => (
                        <View key={i} style={styles.cardBox}>
                            <View style={styles.bloodBox}>
                                <Text style={styles.bloodBoxTxt}>{v.bloodGroup + v.rhFactor}</Text>
                            </View >
                            <View style={styles.detailBox}>
                                <Text style={styles.detailBoxName}>{v.donorName}</Text>
                                <Text style={styles.detailBoxTxt}>Age: {v.age}</Text>
                                <Text style={styles.detailBoxTxt}>Mobile No: {v.mobileNo}</Text>
                                <Text style={styles.detailBoxTxt}>Gender: {v.gender}</Text>
                                <Text style={styles.detailBoxTxt}>City: {v.city}</Text>
                            </View>
                        </View>
                    ))
                    }
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
    searchBox: {
        flexDirection: 'row',
        flex: 1,
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 8,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 2,
        paddingVertical: 6,
        backgroundColor: '#a6a6a6'
    },
    donorBox: {
        flex: 1,
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 8,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 2,
        paddingVertical: 6,
        backgroundColor: '#a6a6a6'
    },
    donorBoxTxt: {
        textAlign: 'center',
        fontSize: 25,
        color: '#262626',
    },
    cardBox: {
        flexDirection: 'row-reverse',
        flex: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 8,
        backgroundColor: 'white',
    },
    bloodBox: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: '#e60000',
        paddingHorizontal: 5
    },
    bloodBoxTxt: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
        marginTop: 30
    },
    detailBox: {
        flex: 3,
        marginVertical: 2
    },
    detailBoxName: {
        fontSize: 26,
        marginLeft: 15,
    },
    detailBoxTxt: {
        fontSize: 18,
        marginLeft: 15,
        color: '#333333'
    }
});



export default DonorList;
