import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import { HeroSection, HomeMoviesList } from '../sections/Home';
import { Colors } from '../constants';
import images from '../assets/images';
import Gap from '../components/Gap';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

export default function Home() {
  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const imageSrc = [
    images.quantum,
    images.avatar,
    images.twilight,
    images.avatar,
    images.twilight,
  ];

  const handleWatch = () => {
    navigate.navigate('Movies', { movieId: 1 });
  };

  const backgroundStyle = {
    backgroundColor: Colors.darkBlue[500],
  };

  return (
    <ScrollView style={[styles.container, backgroundStyle]}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <HeroSection {...{ handleWatch }} />
      <View style={styles.main}>
        <HomeMoviesList title="Trending Now" imgSrc={imageSrc} />
        <Gap height={24} />
        <HomeMoviesList title="Trending Now" imgSrc={imageSrc} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 77,
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 24,
  },
});
