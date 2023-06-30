import React from 'react';
import { View } from 'react-native';

interface Props {
  width?: number;
  height?: number;
}

export default function Gap({ width = 0, height = 0 }: Props) {
  const styles = {
    width,
    height,
  };
  return <View style={styles} />;
}
