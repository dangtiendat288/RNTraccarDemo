import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default ConfigItem = ({
  title,
  subtitle,
  children,
  disabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={disabled}
      onPress={onPress}>
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
    marginVertical: 15.5,
  },
  leftItem: {},
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#202020',
  },
  subtitle: {
    fontSize: 14,
    color: '#737373',
  },
});
