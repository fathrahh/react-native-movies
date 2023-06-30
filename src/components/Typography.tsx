import React from 'react';

import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

import { Colors } from '../constants/';
import myFont from '../utils/font';
import { FlattenType } from '../utils/types';

interface Props {
  font?: FlattenType<typeof myFont>;
  size?: number;
}

export default function Typography({
  children,
  style,
  font,
  size,
  ...rest
}: PropsWithChildren<TextProps & Props>) {
  const fontFamiy = {
    fontFamily: font ?? myFont.poppins.Regular,
    ...(size && { fontSize: size }),
  };

  return (
    <Text style={[styles.text, fontFamiy, style]} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.base.white,
  },
});
