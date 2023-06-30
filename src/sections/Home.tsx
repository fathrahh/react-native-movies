import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { Colors } from '../constants';
import Typography from './../components/Typography';
import Button from '../components/Button';
import Dot from '../components/Dot';
import images from '../assets/images';
import font from '../utils/font';
import { Play, Plus } from '../assets/icons';

const { width } = Dimensions.get('window');

const HIGHLIGHT_HEIGHT = 440;

interface HeroProps {
  handleWatch: () => void;
}

export function HeroSection({ handleWatch }: HeroProps) {
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
        <Button onPress={handleWatch} style={styles.buttonWatch}>
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

interface MoviesListProps {
  imgSrc: any[];
  title: string;
}

export function HomeMoviesList({ title, imgSrc }: MoviesListProps) {
  return (
    <View>
      <View style={[styles.sectionTitle]}>
        <Typography style={[styles.sectionTitle, styles.textHighlight]}>
          {title}
        </Typography>
        <Typography style={[styles.textNavigate]}>See all</Typography>
      </View>
      <ScrollView
        style={styles.moviesContainer}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal>
        {imgSrc.map((src, idx) => (
          <TouchableOpacity
            activeOpacity={0.6}
            style={idx !== 0 && styles.moviesGap}
            key={idx}>
            <Image style={styles.moviePoster} source={src} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
