import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Colors } from '../constant';

interface Props {
  isActive?: boolean;
  marginLeft?: number | null;
  marginRight?: number;
}

export default function Dot({ isActive, marginLeft, marginRight }: Props) {
  const styleProps = {
    marginLeft,
    marginRight,
  };

  return (
    <View style={[styleProps, styles.default, isActive && styles.active]} />
  );
}

const styles = StyleSheet.create({
  default: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D9D9D9',
  },
  active: {
    backgroundColor: Colors.base.white,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
