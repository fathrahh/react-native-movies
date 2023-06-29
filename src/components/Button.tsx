import React from 'react';

import { TouchableOpacity, StyleSheet } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';
import { Colors } from '../constants';

interface Props extends TouchableOpacityProps {
  rounded?: boolean;
  marginLeft?: number;
  marginRight?: number;
}

export default function Button({
  children,
  rounded = false,
  marginLeft = 0,
  marginRight = 0,
  style,
  ...rest
}: Props) {
  const styleProps = {
    marginLeft,
    marginRight,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.base, styleProps, style, rounded && styles.rounded]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
    backgroundColor: '#191825',
    color: Colors.base.white,
    fontWeight: '500',
    padding: 8,
    borderRadius: 16,
  },
  rounded: {
    borderRadius: 100000,
  },
});
