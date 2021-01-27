import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Colors, Mixins } from '../../utils';

interface Props {
  navigation: any;
}

const Layout: React.FC<Props> = (props) => {
  const {navigation} = props;

  return (
    <ScrollView style={styles.wrapper}>
      <Text>Welcome</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.BG_WINDOW,
    padding: Mixins.scaleSize(16)
  },
});

export default Layout;
