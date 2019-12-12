import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 12,
        paddingVertical: 8
    },
    userName: {
        flex: 1,
        textAlign: 'left',
        paddingLeft: 8,
        fontSize: 15
    },
    wave: {
        width: 48,
        height: 28,
        resizeMode: 'contain'
    },
    points: {
        width: 48,
        height: 28,
        resizeMode: 'contain',
        backgroundColor: '#3F1D75',
        color: "white",
        paddingTop: 3,
        paddingBottom: 5
        
    }
});

export default styles;
