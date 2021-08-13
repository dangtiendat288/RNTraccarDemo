import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default ConfigItem = ({title, subtitle, children, disabled}) => {
  return (
    <TouchableOpacity style={styles.container} disabled={disabled}>
      <View style={styles.leftItem}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
  },
  leftItem: {},
  title: {
    fontWeight: '600',
    fontSize: 15,
    color: '#202020',
  },
  subtitle: {
    fontSize: 13,
    color: '#737373',
  },
});
