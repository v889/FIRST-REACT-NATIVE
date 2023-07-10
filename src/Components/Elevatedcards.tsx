import React from "react";
import { View,Text,SafeAreaView,ScrollView ,StyleSheet} from "react-native";
const Card=()=>{
  return (
    
<View>
      <Text>Cards</Text>
      <ScrollView horizontal={true} style={styles.cotainer}>
        <View style={[styles.card,styles.ElevatedCards]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.ElevatedCards]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card,styles.ElevatedCards]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.ElevatedCards]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card,styles.ElevatedCards]}>
            <Text>more...</Text>
        </View>

      </ScrollView>
      </View>

  
  )
}
const styles=StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:"bold",
    paddingHorizontal:8
  },
  cotainer:{
    padding:8
  },
  card:{
    flex:1,
    width:100,
    height:100,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:4,
    margin:8
  },
  ElevatedCards:{
    backgroundColor:"#CAD5E2",
    shadowOffset:{width:1,height:1},
    shadowColor:"#EF5354"
  }

  
})
export default Card