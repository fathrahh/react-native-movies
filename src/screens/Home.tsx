import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../constants';
import Typography from './../components/Typography';
import Button from '../components/Button';
import Dot from '../components/Dot';
import { RootStackParamList } from '../../App';
import images from '../assets/images';
import font from '../utils/font';
import { Play, Plus } from '../assets/icons';

const { width } = Dimensions.get('window');

const HIGHLIGHT_HEIGHT = 440;

function HeroSection() {
  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <View>
        <Image source={images.twilight} style={styles.highlight} />
        <LinearGradient
          colors={[
            'transparent',
            'rgba(25, 24, 37, 0.1)',
            'rgba(25, 24, 37, 1)',
          ]}
          start={{
            x: 0.5,
            y: 0,
          }}
          end={{
            x: 0.5,
            y: 1,
          }}
          style={StyleSheet.absoluteFill}
        />
      </View>
      <View style={styles.bottomHero}>
        <Button
          onPress={() => navigate.navigate('Movies', { movieId: 1 })}
          style={styles.buttonWatch}>
          <Play color="white" />
          <Typography style={styles.smallGap}>Watch Now</Typography>
        </Button>
        <Button rounded marginLeft={16} style={styles.buttonPlus}>
          <Plus color="white" />
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
            horizontal>
            {imageSrc.map((src, idx) => (
              <TouchableOpacity
                activeOpacity={0.6}
                style={idx !== 0 && styles.moviesGap}
                key={idx}>
                <Image style={styles.moviePoster} source={src} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            marginTop: 24,
          }}>
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
            horizontal>
            {imageSrc.map((src, idx) => (
              <TouchableOpacity
                activeOpacity={0.6}
                style={idx !== 0 && styles.moviesGap}
                key={idx}>
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
    paddingBottom: 77,
  },

  bottomHero: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -8,
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
    backgroundColor: Colors.darkBlue[400],
  },
  buttonPlus: {
    backgroundColor: Colors.darkBlue[400],
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
    fontFamily: font.poppins.Bold,
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
