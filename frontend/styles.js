import { Dimensions, StyleSheet } from 'react-native';

const win = Dimensions.get( 'window' );
const styles = StyleSheet.create( {
    container: {
        display: 'block',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        padding: 0
    },
    foodView: {
    },
    foodItem: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        borderBottomColor: '#4AC9BA',
        borderBottomWidth: 2,
        display: 'inline-block',
        position: 'relative'
    },
    addButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: 40,
        height: 40,
        backgroundColor: '#4AC9BA',
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 20,
        top: 16
    }
  titleFont: {
        color: 'black',
        fontSize: 32,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        fontWeight: 'bold'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    textBig: {
        fontSize: 36,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    },
    button: {
        alignSelf: 'stretch',
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        backgroundColor: '#649BE5'
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    },
    textInput: {
        height: 40,
        backgroundColor: 'white',
        borderColor: '#39393A',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        padding: 10
    },
    list: {
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#013489',
        borderRadius: 5,
        padding: 5,
        margin: 5
    },
    listFont: {
        margin: 3,
        borderRadius: 5,
        paddingLeft: 15,
        color: 'white'
    },
    fontUsers: {
        padding: 15
    },
    fontHeader: {
        fontWeight: 'bold',
        fontSize: 20
    },
    fontMessage: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#7FDBD3'
    }
} )

export default styles;
