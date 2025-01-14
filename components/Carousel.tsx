import { Anime } from '@/constants/AnimeList';
import React, { useRef, useEffect } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  Platform,
  StatusBar,
} from 'react-native';

const ReusableCarousel = ({ data, cardWidth, cardHeight ,Heading='Trending' }:{ Heading:string ,data:[] ,cardWidth:Number ,cardHeight:Number}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity is 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 800, 
      useNativeDriver: true, 
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <View style={styles.titleBar}>
      <Text style={styles.titleText}>{Heading}</Text>
    </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id} // Use unique id
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={cardWidth + 10} // Card width + margin
        decelerationRate="fast"
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              { width: cardWidth, height: cardHeight }, // Dynamic width and height
            ]}
          >
              <Image
       style={{ width: cardWidth, height: cardHeight, borderRadius: 10 }}
       source={{ uri: item?.image}} 
       resizeMode="cover"
      />
          </View>
        )}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  titleBar: {
    height: 40,
    justifyContent:'center',
    paddingHorizontal: 12, 
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    height:'auto',
    marginBottom:20
  },
  flatListContainer: {
    paddingHorizontal: 4, 
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginHorizontal: 6, 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default ReusableCarousel;
