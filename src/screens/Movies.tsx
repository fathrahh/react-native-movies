import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import Typography from '../components/Typography';
import { RootStackParamList } from '../../App';
import { Colors } from '../constants';
import images from '../assets/images';
import Button from '../components/Button';
import font from '../utils/font';

import { Plus, Download, Share } from '../assets/icons';

type MyMoviesProp = RouteProp<RootStackParamList, 'Movies'>;

const BANNER_HEIGHT = 213;
const { width } = Dimensions.get('window');

export default function Movies() {
  const route = useRoute<MyMoviesProp>();
  const { movieId } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={images.hospital} style={styles.banner} />
      <View style={styles.actionWrapper}>
        <Button style={styles.buttonWatch}>
          <Image source={images.play} />
          <Typography style={styles.smallGap}>Watch Now</Typography>
        </Button>
      </View>

      <View style={styles.main}>
        <View style={styles.mainHeader}>
          <Typography
            font="Poppins-Bold"
            style={[styles.title, styles.textHighlight]}
          >
            Hospital Playlist
          </Typography>
          <View style={styles.moviesMetadata}>
            <Typography style={styles.metadataText}>2022</Typography>
            <View style={[styles.smallDot, styles.smallGap]} />
            <Typography style={styles.metadataText}>2 Seasons</Typography>
            <View style={[styles.smallDot, styles.smallGap]} />
            <Typography style={styles.metadataText}>16+</Typography>
          </View>
        </View>
        <Typography style={styles.subtitle}>
          Drama | South Korea | Medical, Romance{' '}
        </Typography>
        <Typography style={styles.description}>
          Friends since undergrad school, five doctors remain close and share a
          love for music while working at the same hospital.
        </Typography>
        <View style={styles.buttonActionWrapper}>
          <TouchableOpacity style={styles.buttonAction}>
            <Plus color={'white'} width={24} height={24} />
            <Typography>Watchlist</Typography>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAction}>
            <Download color={'white'} />
            <Typography>Download</Typography>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAction}>
            <Share color={'white'} />
            <Typography>Share</Typography>
          </TouchableOpacity>
        </View>
        <Typography style={[styles.title, styles.textHighlight]}>
          Season 1
        </Typography>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBlue[500],
  },
  banner: {
    width,
    objectFit: 'cover',
    height: BANNER_HEIGHT,
  },
  main: {
    padding: 16,
  },
  buttonWatch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    width: 200,
    backgroundColor: Colors.darkBlue[400],
  },
  smallDot: {
    width: 3,
    height: 3,
    backgroundColor: Colors.darkBlue[100],
    borderRadius: 3,
  },
  actionWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  smallGap: { marginHorizontal: 4 },
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moviesMetadata: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metadataText: {
    color: Colors.darkBlue[100],
    fontSize: 12,
  },
  title: {
    fontSize: 16,
  },
  textBase: {
    color: Colors.darkBlue[100],
  },
  textHighlight: {
    fontFamily: font.poppins.Bold,
  },
  subtitle: {
    fontFamily: font.poppins.SemiBold,
    fontSize: 10,
    marginTop: 4,
  },
  description: {
    color: Colors.darkBlue[200],
    fontSize: 10,
    marginTop: 8,
  },
  buttonAction: {
    marginRight: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActionWrapper: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 36,
  },
  actionIconGap: {
    marginBottom: 2,
  },
});
