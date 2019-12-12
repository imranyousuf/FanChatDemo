import { StyleSheet } from 'react-native';
import AppStyles from 'src/config/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: AppStyles.colors.lightWhite,
        color: '#4AB153'
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: 150,
        resizeMode: 'cover',
        
        
      },
      backgroundImage2: {
        marginTop: 150,  
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        
        
      }


});

export default styles;
