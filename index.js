import { AppRegistry, Platform } from 'react-native';
import App from './src/Entrypoint';

AppRegistry.registerComponent('FanChat', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('FanChat', { rootTag });
}

console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];