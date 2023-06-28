import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { Colors } from './../constant';
import Typography from './../components/Typography';
import Button from '../components/Button';
import Dot from '../components/Dot';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import images from '../assets/images';

const { width } = Dimensions.get('window');

const HIGHLIGHT_HEIGHT = 440;

function HeroSection() {
  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <View>
        <ImageBackground source={images.twilight} style={styles.highlight}>
          <LinearGradient
            colors={['transparent', 'rgba(25, 24, 37, 1)']}
            style={styles.gradient}
          />
        </ImageBackground>
      </View>
      <View style={styles.bottomHero}>
        <Button
          onPress={() => navigate.navigate('Movies', { movieId: 1 })}
          style={styles.buttonWatch}
        >
          <Image source={images.play} />
          <Typography style={styles.smallGap}>Watch Now</Typography>
        </Button>
        <Button rounded marginLeft={16}>
          <Image source={images.plus} />
        </Button>
      </View>
      <View style={styles.paginationWrapper}>
        {Array(6)
          .fill(null)
          .map((_, idx) => (
            <Dot
              key={idx}
              isActive={idx === 0}
              marginLeft={idx !== 0 ? 4 : 0}
            />
          ))}
      </View>
    </View>
  );
}

export default function Home() {
  const imageSrc = [
    images.quantum,
    images.avatar,
    images.twilight,
    images.avatar,
    images.twilight,
  ];

  const backgroundStyle = {
    backgroundColor: Colors.darkBlue[500],
  };

  return (
    <ScrollView style={[styles.container, backgroundStyle]}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <HeroSection />
      <View style={styles.main}>
        <View>
          <View style={[styles.sectionTitle, backgroundStyle]}>
            <Typography style={[styles.sectionTitle, styles.textHighlight]}>
              Trending Now
            </Typography>
            <Typography style={[styles.textNavigate]}>See all</Typography>
          </View>
          <ScrollView
            style={styles.moviesContainer}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            horizontal
          >
            {imageSrc.map((src, idx) => (
              <TouchableOpacity
                activeOpacity={0.6}
                style={idx !== 0 && styles.moviesGap}
                key={idx}
              >
                <Image style={styles.moviePoster} source={src} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            marginTop: 24,
          }}
        >
          <View style={[styles.sectionTitle, backgroundStyle]}>
            <Typography style={[styles.sectionTitle, styles.textHighlight]}>
              Trending Now
            </Typography>
            <Typography style={[styles.textNavigate]}>See all</Typography>
          </View>
          <ScrollView
            style={styles.moviesContainer}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            horizontal
          >
            {imageSrc.map((src, idx) => (
              <TouchableOpacity
                activeOpacity={0.6}
                style={idx !== 0 && styles.moviesGap}
                key={idx}
              >
                <Image style={styles.moviePoster} source={src} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  bottomHero: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  highlight: {
    width,
    objectFit: 'cover',
    height: HIGHLIGHT_HEIGHT,
  },
  smallGap: { marginLeft: 4 },
  main: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 24,
  },
  buttonWatch: {
    paddingHorizontal: 24,
  },
  paginationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textHighlight: {
    fontSize: 16,
    fontWeight: '600',
  },
  textNavigate: {
    fontSize: 12,
    fontWeight: '300',
    color: '#D9D9D9',
  },
  moviesContainer: {
    marginTop: 10,
  },
  moviesGap: {
    marginLeft: 10,
  },
  moviePoster: {
    width: 125,
    height: 194,
    borderRadius: 8,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});
