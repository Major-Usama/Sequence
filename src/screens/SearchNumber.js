import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,

} from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default function SearchNumber({navigation}) {
  const [text, onChangeText] = React.useState("");


  const DATA = [
    {
      id: '1',
      image: require('../assets/images/1.png'),
      title:"Откуда он появился",
      number:"+7 943 43 56 67",
    },
    {
        id: '2',
        image: require('../assets/images/2.png'),
        title:"Почему он используется",
        number:"+7 933 53 63 07",
      },
      {
        id: '3',
        image: require('../assets/images/3.png'),
        title:"Что такое Lorem Ipsum",
        number:"+7 943 43 56 67",
      },
      {
        id: '4',
        image: require('../assets/images/1.png'),
        title:"Откуда он появился",
        number:"+7 943 43 56 67",
      },
      {
          id: '5',
          image: require('../assets/images/2.png'),
          title:"Почему он используется",
          number:"+7 933 53 63 07",
        },
        {
          id: '6',
          image: require('../assets/images/3.png'),
          title:"Что такое Lorem Ipsum",
          number:"+7 943 43 56 67",
        },
   
  ];


  const renderItem = ({ item }) => (

    <TouchableOpacity
    onPress={()=>navigation.navigate('UserDeatilsScreen',
    {
        image:item.image,
        title:item.title,
        number:item.number,
    }
    )}
    activeOpacity={0.4}
    style={{marginBottom:RFValue(20)}}>
    <View style={styles.flatlist}>
     
     <Image
     style={styles.listImage}
     source={item.image}
     />

     <View style={{marginLeft:RFValue(14)}}>
         <Text
         style={styles.title}
         >{item.title}</Text>

         <Text
         style={styles.number}
         >{item.number}</Text>
     </View>
    

    </View>
    <View
    style={styles.seprator}
    />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:150}}
      >
        <ImageBackground
          resizeMode="contain"
          style={styles.homebackImage}
          source={require("../assets/images/homeback.jpg")}
        >
          <Image
            style={styles.phoneIcon}
            source={require("../assets/icons/phone.png")}
          />
        </ImageBackground>

        <View style={styles.mainFooter}>
          <View style={styles.innerFooter}>
            <Text style={styles.exampleText}>EXAMPLE</Text>

            <View style={styles.searchBarContainer}>
              <TextInput
                placeholder="найти номера"
                placeholderTextColor="#A7A8AB"
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />

              <TouchableOpacity activeOpacity={0.7} style={styles.searchButton}>
                <Image
                  style={styles.searchIcon}
                  source={require("../assets/icons/search.png")}
                />
              </TouchableOpacity>
            </View>

            <View>
            <FlatList
            contentContainerStyle={{marginTop:RFValue(35)}}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
            </View>

            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8E7D7",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  homebackImage: {
    width: WIDTH,
    height: HEIGHT / 3,
  },

  phoneIcon: {
    width: RFValue(37),
    height: RFValue(37),
    position: "absolute",
    top: RFValue(20),
    left: RFValue(32),
  },

  mainFooter: {
    width: WIDTH,
    height: HEIGHT / 1.1,
    backgroundColor: "#F3F3F3",
    borderTopRightRadius: 51,
    borderTopLeftRadius: 51,
  },

  innerFooter: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: "#fff",
    borderTopRightRadius: 51,
    borderTopLeftRadius: 51,
    marginTop: RFValue(13),
  },

  exampleText: {
    fontSize: 14,
    fontFamily: "Bold",
    color: "#DCDEEC",
    textAlign: "center",
    marginTop: RFValue(18),
  },

  searchBarContainer: {
    width: WIDTH - 64,
    height: RFValue(78),
    borderRadius: 20,
    backgroundColor: "#F5F6FC",
    alignSelf: "center",
    marginTop: RFValue(18),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: WIDTH - 140,
    color: "#373737",
    fontFamily: "Regular",
    height: RFValue(78),
    paddingHorizontal: 30,
    fontSize:RFValue(15)
  },
  searchButton: {
    width: RFValue(55),
    height: RFValue(55),
    borderRadius: 18,
    backgroundColor: "#CCE7C2",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    width: RFValue(19),
    height: RFValue(19),
  },

  progressContainer: {
    alignSelf: "center",
    marginTop: RFValue(50),
  },
  listImage:
  {
      width:RFValue(47),
      height:RFValue(47),
  },
  title:
  {

    fontSize: RFValue(17),
    fontFamily:'Regular',
    color:'#373737',
  },

  number:
  {
      fontSize:RFValue(13),
      fontFamily:'Regular',
      color:'#979797',
      marginTop:RFValue(5)

  },
  flatlist:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:32,

  },
  seprator:
  {
      width:WIDTH-65,
      height:1,
      backgroundColor:'#DFDFDF',
      alignSelf:'center',
      marginTop:RFValue(24)
  }
});
