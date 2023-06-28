import React from 'react';

import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

import { Colors } from './../constant';
import myFont from '../utils/font';
import { FlattenType } from '../utils/types';

interface Props {
  font?: FlattenType<typeof myFont>;
}

export default function Typography({
  children,
  style,
  font,
  ...rest
}: PropsWithChildren<TextProps & Props>) {
  const fontFamiy = {
    fontFamily: font,
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
    fontFamily: myFont.poppins.Regular,
  },
});
