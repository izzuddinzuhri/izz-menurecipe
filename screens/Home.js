import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';
import Category from './components/Home/Category'
import Dessert from './components/Home/Dessert'

const {height,width} = Dimensions.get('window')
class Home extends Component {

    componentWillMount(){
        this.startHeaderHeight=80
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100+StatusBar.currentHeight
        }

    }
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{ flex: 1}}>
                   <View style={{height:this.startHeaderHeight,backgroundColor: 'white',
                     borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
                     <View style={{flexDirection:'row', padding:10,
                                  backgroundColor:'white', marginHorizontal:20,
                                  shadowOffset:{width:0,height:0},
                                  shadowColor:'black',
                                  shadowOpacity:0.2,
                                  elevation:1,
                                  marginTop:Platform.OS=='android' ? 30:null}}>
                         <Icon name="ios-search" size={20}/>
                         <TextInput
                              underlineColorAndroid="transparent"
                              placeholder="Ayam masak merah"
                              placeholderTextColor="grey"
                              style={{flex:1,fontWeight:'700',backgroundColor:'white'}}/>
                     </View>
                   </View>
                   <ScrollView scrollEventThrottle = {16} >
                     <View style={{flex:1, backgroundColor:'white',paddingTop:20}} >
                         <Text style={{fontSize:24,fontWeight:'700',
                                     paddingHorizontal:20}}>
                             We will help you to get the perfect recipe for your meal.
                         </Text>

                         <View style={{height:130,marginTop:20}}>
                            <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                                
                               {/* <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,
                                           borderColor:'#dddddd'}}>
                                <View style={{flex:2}}>
                                 <Image source={require('../assets/masaklemakayam.jpg')}
                                 style={{flex:1,width:null,height:null,resizeMode:'cover'}}
                                   />
                                </View>
                                 <View style={{flex:1,paddingLeft:10,
                                    paddingTop:10}}>
                                      <Text>
                                          Malay cuisines
                                      </Text>
                                 </View>
                               </View> */}
                              <Category imageUri={require('../assets/masaklemakayam.jpg')}
                                  name="Ayam Lemak Cili Api"/>
                                  <Category imageUri={require('../assets/gulaiitik.jpg')}
                                  name="Gulai Itik"/>
                                   <Category imageUri={require('../assets/trifle.jpg')}
                                  name="Chocolate Trifle"/>
                                   <Category imageUri={require('../assets/tacos.jpg')}
                                  name="Beef Tacos"/>
                                   <Category imageUri={require('../assets/ratatouille.jpg')}
                                  name="Ratatouille"/>
                                  <Category imageUri={require('../assets/bawal3rasa.jpg')}
                                  name="Ikan Bawal 3 Rasa"/>
                                   <Category imageUri={require('../assets/badakberendam.jpg')}
                                  name="Badak Berendam"/>
                                   <Category imageUri={require('../assets/lavacake.jpg')}
                                  name="Lava Cake"/>
                                   <Category imageUri={require('../assets/deepdishpizza.jpg')}
                                  name="Deep Dish Pizza"/>

                            </ScrollView>
 
                         </View>
                         <View style={{ marginTop: 40, paddingHorizontal:20}}>
                             <Text style={{fontSize:24,fontWeight:'700'}}>
                                 The best recipe with highest rating by users
                             </Text>
                             <Text style={{fontWeight:'100', marginTop:10}}> 
                                 Rendang Daging Tok
                             </Text>
                             <View style={{width:width-40,height:200,marginTop:20}}>
                                 <Image style={{flex:1,height:null,width:null,resizeMode:'cover',
                                 borderRadius:5,borderWidth:1,borderColor:'#dddddd'}}
                                 source={require('../assets/tok.jpg')} />
                             </View>
                         </View>
                     </View>
                     <View style={{ marginTop:40}}>
                        <Text style={{fontSize:24, fontWeight:'700',
                        paddingHorizontal:20}}>
                            Delicious desserts
                        </Text>
                        <View style={{paddingHorizontal:20, marginTop:20,
                        flexDirection:'row', flexWrap:'wrap', 
                        justifyContent:'space-between'}}>
                               <Dessert width={width}
                                  imageUri={require('../assets/Keria.jpg')}
                                  name="Kuih Keria"
                                  desc=" Malay desserts sweet potato doughnut"
                                  ingredients="INGREDIENTS :
                                  DOUGH
                                  [600 g sweet potatoes]
                                  [6 tbsp wheat flour]
                                  [1 tsp fine sea salt]
                                  GLAZE"
                                  rating={4} />
                               <Dessert width={width}
                                  imageUri={require('../assets/lavacake.jpg')}
                                  name="Lavacake"
                                  desc=" Spongie cake with melt filling inside"
                                  ingredients="INGREDIENTS :
                                  Baking spray, for spraying custard cups
                                 [1 stick butter]
                                 [2 ounces bittersweet chocolate] 
                                 [2 ounces semisweet chocolate] 
                                 [1 1/4 cups powdered sugar] 
                                 [2 whole eggs]
                                 [3 egg yolks] 
                                 [1 teaspoon vanilla] 
                                 [1/2 cup all-purpose flour] 
                                 Vanilla ice cream, for serving"
                                  rating={5} />
                                  <Dessert width={width}
                                  imageUri={require('../assets/bagel.jpg')}
                                  name="Bagel"
                                  desc=" American bread dougnut"
                                  ingredients="INGREDIENTS :
                                  [2 teaspoons active dry yeast]
                                  [1 ½ tablespoons (4 ½ teaspoons) granulated sugar]
                                  [1 ¼ cups / 300ml warm water (you may need ± ¼ cup /60ml more)]
                                  [3 ½ cups (500g) bread flour or high gluten flour(will need extra for kneading)]
                                  [1 ½ teaspoons salt]
                                  Total time : 1 hour 45 minutes"
                                  rating={4} />
                                  <Dessert width={width}
                                  imageUri={require('../assets/badakberendam.jpg')}
                                  name="Badak Berendam"
                                  desc=" Rice dough fill with coconut flesh and soak with brown sugar"
                                  ingredients="INGREDIENTS :
                                  [Tepung pulut]
                                  [Air kapur]
                                  [Pewarna hijau]
                                  [Gula melaka potong kecil-kecil]
                                  [Santan pekat]
                                  [Garam sedikit]
                                  [Tepung beras sedikit"
                                  rating={4} />
                                  <Dessert width={width}
                                  imageUri={require('../assets/trifle.jpg')}
                                  name="Chocolate Trifle"
                                  desc=" Mix of fresh brownies, pudding and ice cream in cup"
                                  ingredients="INGREDIENTS :
                                  [1 (19.8-ounce) package fudge brownie mix]
                                  [1/2 cup Kahlua or other coffee-flavored liqueur (can be substituted with coffee and sugar)]
                                  [3 (3.9-ounce) packages chocolate instant pudding mix]
                                  [1 (12-ounce) container frozen whipped topping]
                                  [6 (1.4-ounce) toffee-flavored candy bars, crushed]"
                                  rating={3} />
                                  <Dessert width={width}
                                  imageUri={require('../assets/turkishdelight.jpg')}
                                  name="Turkish Delight"
                                  desc=" Traditional turkish delight granulated sugar with rose"
                                  ingredients="INGREDIENTS :
                                  [8 leaves gelatine]
                                  [500g (1lb) granulated sugar]
                                  [Few drops of rosewater]
                                  [Few drops of pink liquid food colouring]
                                  [2 level tbsp icing sugar]"
                                  rating={5} />
                            {/* <View style={{width:width/2,height:width/2, 
                                borderWidth:0.5, borderColor:'#dddddd'}}>
                              <View style={{flex:1}} >
                                 <Image
                                   style={{ flex:1, width: null, height:null, 
                                    resizeMode:'cover'}}
                                 source={require('../assets/Keria.jpg')}/>
                              </View>
                              <View style={{flex:1,alignItems:'flex-start',
                                           justifyContent:'space-evenly', paddingLeft:10}}>
                                     <Text style={{fontSize:14, color:'#b63838'}}>
                                        Kuih Keria
                                     </Text>
                                     <Text style={{fontSize:12, fontWeight:'bold'}}>
                                         Malay desserts shape like donuts that
                                         made with sweet potato and fill with white sugar.
                                     </Text>
                                     <Text style={{fontSize:12}}>
                                       Ingredients :
                                       DOUGH
                                       -600 g sweet potatoes
                                       -6 tbsp wheat flour
                                       -1 tsp fine sea salt
                                       -GLAZE 
                                     </Text>
                              </View>
                            </View> */}
                        </View>
                     </View>
                   </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});