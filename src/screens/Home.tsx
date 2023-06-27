import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import { Colors } from './../constant';
import Typography from './../components/Typography';
import Button from '../components/Button';
import Dot from '../components/Dot';

const { width } = Dimensions.get('window');

export default function Home() {
  const imageSrc = [
    require('../assets/quantum_poster.jpg'),
    require('../assets/Avatar.jpg'),
    require('../assets/twilight.jpeg'),
  ];

  const backgroundStyle = {
    backgroundColor: Colors.base.black,
  };

  return (
    <ScrollView style={[styles.container, backgroundStyle]}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <View>
        <View>
          <Image
            style={styles.highlight}
            source={require('./../assets/twilight.jpeg')}
          />
        </View>
        <View style={styles.bottomHero}>
          <Button style={styles.buttonWatch}>
            <Image source={require('./../assets/Play.png')} />
            <Typography style={styles.smallGap}>Watch Now</Typography>
          </Button>
          <Button rounded marginLeft={24}>
            <Image source={require('./../assets/Plus.png')} />
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
              <View style={idx !== 0 && styles.moviesGap} key={idx}>
                <Image style={styles.moviePoster} source={src} />
              </View>
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
  bottomHero: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  highlight: {
    width,
    objectFit: 'cover',
    height: 440,
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
