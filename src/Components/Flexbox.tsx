import React from "react";
import { View,Text,SafeAreaView,ScrollView ,StyleSheet} from "react-native";
const Flexbox=()=>{
  return (
    

      <View  style={{flex:1,flexDirection:"row",padding:8}}>
        <View style={[styles.card,styles.container,styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.container,styles.cardTwo]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.container,styles.cardThree]}>
          <Text>Red</Text>
        </View>
      </View>
      

  
  )
}
const styles=StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:"bold",
    paddingHorizontal:8
  },
  container:{
    padding:8
  },
  card:{
    width:100,
    height:100,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:4,
    margin:0
  },
  cardOne:{
    backgroundColor:"#EF5354"
  },
  cardTwo:{
    backgroundColor:"#50DBB4"
  },
  cardThree:{
    backgroundColor:"#5DA3FA"
  }
})
export default Flexbox