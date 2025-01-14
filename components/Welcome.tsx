import { Dimensions, Image, StyleSheet, Text } from 'react-native'
import { View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const width = Dimensions.get('window').width;

const Welcome = ({Heading}:{Heading:string}) => {
  return (
   <View style={styles.titleBar}>
        <Text style={styles.titleText}>Hey , {Heading|| 'Aastha Pasta 😎'}</Text>
        <Text style={styles.titleText2}><FontAwesome6 name="circle-user" size={35}  color="black" /></Text>
          </View>
  )
}



const styles = StyleSheet.create({
  titleBar: {
    height: 70,
    justifyContent:'space-between',
    alignItems:'center',
    display:'flex',
    width:width - 1,
    flexDirection:'row',
    paddingHorizontal: 10, 
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  titleText2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight:15 ,
  },
});


export default Welcome;