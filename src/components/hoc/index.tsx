import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../utils';

interface hocProps {
  children: any;
}

const hoc = (Comp: any) => ({children, ...props}: hocProps) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.STATUS_BAR} />
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          style={{flex: 1}}
          contentContainerStyle={{flex: 1}}>
          <View style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Comp {...props}>{children}</Comp>
            </TouchableWithoutFeedback>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

const hocNoScroll = (Comp: any) => ({children, ...props}: hocProps) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.STATUS_BAR} />
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Comp {...props}>{children}</Comp>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SHADES.dark[5],
  },
});

export {hoc, hocNoScroll};

export default hoc;
