import React from "react";
import { View,Text,SafeAreaView,ScrollView ,StyleSheet} from "react-native";
import Flexbox from "./src/Components/Flexbox";
import Card from "./src/Components/Elevatedcards";
import FancyCard from "./src/Components/FancyCards";
import ActionCard from "./src/Components/ActionCard";
import ContactList from "./src/Components/ContactList";
const App=()=>{
  return (
    
    <ScrollView>
    
    <View>
      <Text>Flating Cards</Text>
      
      <FancyCard/>
      <ActionCard/>
      <ContactList/>
      
    </View>
    </ScrollView>
  
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
export default App