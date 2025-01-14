import React, { useRef, useEffect, useState } from 'react';
import {
  Animated,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
  View,
  Text,
  FlatList,
  ScrollView,
  Image
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import Carousel from 'react-native-reanimated-carousel';
import ReusableCarousel from '@/components/Carousel';
import { Anime } from '@/constants/AnimeList';
import Welcome from '@/components/Welcome';
import BarCarousel from '@/components/BarCarousel';
import { getAnimeInfo } from '@/apis/ApiController';

const data = [
  { id: '1', title: 'Item 1', text: 'Text 1' },
  { id: '2', title: 'Item 2', text: 'Text 2' },
  { id: '3', title: 'Item 3', text: 'Text 3' },
  { id: '4', title: 'Item 4', text: 'Text 4' },
  { id: '5', title: 'Item 5', text: 'Text 5' },
];
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function HomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        setLoading(true);
        const data = await getAnimeInfo('spy-x-family-17977'); // Call the API to get anime info
        setAnimeData(data); // Set the data in the state
        console.log(data);
      } catch (err) {
        setError('Failed to fetch anime details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeDetails();
  }, []); //

  return (
    <SafeAreaView style={styles.safeArea}>
     <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Welcome Heading="Aastha Pasta 😂" />
        <Carousel
          loop
          width={width}
          style={{
            marginBottom:10,
            borderRadius:15,
          }}
          height={250}
          autoPlay={true}
          data={Anime}
          scrollAnimationDuration={3000}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ item, index }) => (
            <View style={styles.carouselItem}>
              <Image
                    style={{ width: width-20, height: 250, borderRadius: 10 }}
                    source={{ uri: item?.image}} 
                    resizeMode="stretch"
                   />
            </View>
          )}
        />
        <BarCarousel/>
        <ReusableCarousel Heading='Popular' data={Anime} cardHeight={160} cardWidth={width * 0.36} />
        <ReusableCarousel Heading='Trending' data={Anime} cardHeight={160} cardWidth={width * 0.65} />
        <ReusableCarousel Heading='Top 10 This Week' data={Anime} cardHeight={160} cardWidth={width * 0.48} />
        <ReusableCarousel Heading='Weekly Top' data={Anime} cardHeight={160} cardWidth={width * 0.78} />
        <ReusableCarousel Heading='All Time Goat 💀' data={Anime} cardHeight={160} cardWidth={width * 0.36} />
        <ReusableCarousel Heading='Genres' data={Anime} cardHeight={160} cardWidth={width * 0.50} />
      </Animated.View>
</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // backgroundColor:'lightpink',
    marginBottom:50
  },
  scrollViewContent: {
    paddingBottom: 20, // Add space at the bottom
  },
  container: {
    flex: 1,
    overflowY:'auto'
  },
  flatListContainer: {
    paddingHorizontal: 10,
    marginBottom: 20, // Add space below FlatList
  },
  card: {
    width: width * 0.3,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    height:500,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    marginHorizontal: 10,
  },
  carouselText: {
    textAlign: 'center',
    fontSize: 30,
  },
});
