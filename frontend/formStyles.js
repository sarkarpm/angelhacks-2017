import { Dimensions, StyleSheet } from 'react-native';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
    titleFont: {
        color: 'black',
        fontSize: 32,
        textAlign: 'center'
    },
    image: {
        margin: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1FAF9A'
    },
    titleFont: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    pun: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        color: 'white',
        fontStyle: 'italic'
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
        borderRadius: 5,
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        width: win.width,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 10,
        backgroundColor: '#FFFFAC'
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 20,
        color: '#0C2F28',
        fontWeight: 'bold'
    },
    textInput: {
        width: win.width,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 5,
        padding: 10
    },
    buttonOrange: {
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        width: win.width,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 10,
        backgroundColor: '#FEB971'
    },
    buttonRed: {
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        width: win.width,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 10,
        backgroundColor: '#CBFF85'
    },
    fontUsers: {
        padding: 15
    },
    fontHeader: {
        //fontWeight: 'bold',
        fontSize: 20
    },
    fontMessage: {
        fontSize: 26,
        //fontWeight: 'bold',
        color: '#7FDBD3'
    }
} );

export default styles;