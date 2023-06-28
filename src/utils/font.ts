type FontFactory<F extends string, Type extends readonly string[]> = {
  [Property in Type[number]]: `${F}-${Type[number]}`;
};

function fontFactory<F extends string, K extends readonly string[]>(
  fontFamily: F,
  key: K
): FontFactory<F, K> {
  const result: FontFactory<F, K> = {} as FontFactory<F, K>;

  key.forEach(k => {
    result[k as keyof typeof result] = `${fontFamily}-${k}`;
  });

  return result;
}

const poppinsFamily = [
  'Black',
  'BlackItalic',
  'Bold',
  'BoldItalic',
  'ExtraLight',
  'ExtraLightItalic',
  'Italic',
  'Light',
  'LightItalic',
  'Medium',
  'MediumItalic',
  'Regular',
  'SemiBold',
  'SemiBoldItalic',
  'Thin',
  'ThinItalic',
] as const;

// Add font

export default {
  poppins: fontFactory('Poppins', poppinsFamily),
};
