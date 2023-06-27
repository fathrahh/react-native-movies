import React from 'react';

import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

import { Colors } from './../constant';

export default function Typography({
  children,
  style,
  ...rest
}: PropsWithChildren<TextProps>) {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.base.white,
  },
});
