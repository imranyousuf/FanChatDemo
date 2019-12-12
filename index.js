import { AppRegistry, Platform } from 'react-native';
import App from './src/Entrypoint';

AppRegistry.registerComponent('FanChat', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('FanChat', { rootTag });
}
