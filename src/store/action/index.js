import database from '@react-native-firebase/database'


// const get_donorList = () => {
//     return (dispatch) => {

//             database().ref('/').child(`DonorList`).on("child_added", (data) => {
//                let donorList = {}
//                 donorList = data.val()
//                 dispatch({ type: 'GETDONORLIST', payload: donorList })
//             })
//     }
// }


const set_data = () => {
    return (dispatch) => {
        dispatch({ type: 'SETDATA' })
    }

}











export {
    // set_data,
    // get_donorList
}