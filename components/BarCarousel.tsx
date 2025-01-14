import { Anime } from '@/constants/AnimeList'
import { messages } from '@/constants/Colors';
import { StatusBar, Text } from 'react-native';
import { Dimensions, Image, Platform, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';


const width = Dimensions.get('window').width;
const BarCarousel = () => {
    return (
        <Carousel
            loop
            width={width}
            style={{
                marginBottom: 0,
                borderRadius: 15,
            }}
            height={100}
            autoPlay={true}
            data={messages}
            scrollAnimationDuration={5000}
            renderItem={({ item, index }) => (
                <View style={[styles.carouselItem, { paddingHorizontal: 15, backgroundColor: item?.gradientColors[0] }]}>
                    <Text style={{ color: item?.textColor, fontSize: 16, fontStyle: 'italic', fontFamily: 'monospace', textAlign: 'center', fontWeight: '800' }}>- {item?.text}</Text>
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        // backgroundColor:'lightpink',
        marginBottom: 50
    },
    scrollViewContent: {
        paddingBottom: 20, // Add space at the bottom
    },
    container: {
        flex: 1,
        overflowY: 'auto'
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
        height: 500,
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
        borderRadius: 15,
        marginHorizontal: 10,
    },
    carouselText: {
        textAlign: 'center',
        fontSize: 30,
    },
});


export default BarCarousel