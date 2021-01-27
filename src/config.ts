import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'Possible Unhandled Promise Rejection (id:',
  'Sending `onAnimatedValueUpdate`',
])

if (!__DEV__) {
  console.log = () => {};
  console.warn = () => {};
}
