import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: '100vh',
        width: '100%',
    },
    menuBar: {
        width: '100%',
        position: 'fixed',
        zIndex: 3,
    },
    titleBodyContainer: {
        position: 'absolute',
        width: '100%',
        height: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    titleText: {
        fontSize: 30,
    },
    titleContainer: {
        marginTop: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});