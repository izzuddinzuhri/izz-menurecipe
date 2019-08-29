

import React from 'react';
import { Button, View, Text, WebView, ScrollView, Image, Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
// import Category from './components/Category';
const {height,width} = Dimensions.get('window')

class HomeScreen extends React.Component {

  render() {
    return (
        <ScrollView scrollEventThrottle = {16} >
                     <View style={{flex:1, backgroundColor:'white',paddingTop:20}} >
                         <Text style={{fontSize:24,fontWeight:'700',
                                     paddingHorizontal:20}}>
                             We will help you to get the perfect recipe for your meal.
                         </Text>

                         <View style={{height:130,marginTop:20}}>
                            <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                                
                               <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,
                                           borderColor:'#dddddd'}}>
                                <View style={{flex:2}}>
                                 <Image source={require('../assets/masaklemakayam.jpg')}
                                 style={{flex:1,width:null,height:null,resizeMode:'cover'}}
                                   />
                                </View>
                                 <View style={{flex:1,paddingLeft:10,
                                    paddingTop:10}}>
                                      <Text>
                                          Ayam Masak Lemak
                                      </Text>
                                 </View>
                               </View>
                               <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,
                                           borderColor:'#dddddd'}}>
                                <View style={{flex:2}}>
                                 <Image source={require('../assets/beefsteak.jpg')}
                                 style={{flex:1,width:null,height:null,resizeMode:'cover'}}
                                   />
                                </View>
                                 <View style={{flex:1,paddingLeft:10,
                                    paddingTop:10}}>
                                      <Text>
                                          Beef Steak
                                      </Text>
                                 </View>
                               </View>
                               <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,
                                           borderColor:'#dddddd'}}>
                                <View style={{flex:2}}>
                                 <Image source={require('../assets/lavacake.jpg')}
                                 style={{flex:1,width:null,height:null,resizeMode:'cover'}}
                                   />
                                </View>
                                 <View style={{flex:1,paddingLeft:10,
                                    paddingTop:10}}>
                                      <Text>
                                          Lava Cake
                                      </Text>
                                 </View>
                               </View>
                               <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,
                                           borderColor:'#dddddd'}}>
                                <View style={{flex:2}}>
                                 <Image source={require('../assets/nasilemak.jpg')}
                                 style={{flex:1,width:null,height:null,resizeMode:'cover'}}
                                   />
                                </View>
                                 <View style={{flex:1,paddingLeft:10,
                                    paddingTop:10}}>
                                      <Text>
                                          Nasi Lemak
                                      </Text>
                                 </View>
                               </View>
                               <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,
                                           borderColor:'#dddddd'}}>
                                <View style={{flex:2}}>
                                 <Image source={require('../assets/irishss.jpg')}
                                 style={{flex:1,width:null,height:null,resizeMode:'cover'}}
                                   />
                                </View>
                                 <View style={{flex:1,paddingLeft:10,
                                    paddingTop:10}}>
                                      <Text>
                                          Irish beef stew
                                      </Text>
                                 </View>
                               </View>
                               
                               
                              {/* <Category imageUri={require('../assets/masaklemakayam.jpg')}
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
                                  name="Deep Dish Pizza"/> */}

                            </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal:20}}>
                             <Text style={{fontSize:24,fontWeight:'700'}}>
                                 The best recipe with highest rating by users
                             </Text>
                             <Text style={{fontWeight:'100', marginTop:10}}> 
                                 Rendang Daging Tok
                             </Text>
                             <View style={{width:320,height:250,marginTop:20, marginBottom:40}}>
                                 <Image style={{flex:1,height:null,width:null,resizeMode:'cover',
                                 borderRadius:5,borderWidth:1,borderColor:'#dddddd'}}
                                 source={require('../assets/tok.jpg')} />
                             </View>
                         </View>
                         <View style={{ marginTop:40}}>
                        <Text style={{fontSize:24, fontWeight:'700',
                          paddingHorizontal:50, marginBottom:30}}>
                            Delicious desserts</Text></View>
                            <View style={{paddingHorizontal:20, marginTop:20,
                        flexDirection:'row', flexWrap:'wrap', 
                        justifyContent:'space-between'}}>
                        <View style={{width:width/2 -30,height:width/2+250, 
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
                            </View>
                            <View style={{width:width/2 -30,height:width/2+250, 
                                borderWidth:0.5, borderColor:'#dddddd'}}>
                              <View style={{flex:1}} >
                                 <Image
                                   style={{ flex:1, width: null, height:null, 
                                    resizeMode:'cover'}}
                                 source={require('../assets/turkishdelight.jpg')}/>
                              </View>
                              <View style={{flex:1,alignItems:'flex-start',
                                           justifyContent:'space-evenly', paddingLeft:10}}>
                                     <Text style={{fontSize:14, color:'#b63838'}}>
                                        Turkish Delight
                                     </Text>
                                     <Text style={{fontSize:12, fontWeight:'bold'}}>
                                     Traditional turkish delight granulated sugar with rose.
                                     </Text>
                                     <Text style={{fontSize:12}}>
                                     INGREDIENTS :
                                  [8 leaves gelatine]
                                  [500g (1lb) granulated sugar]
                                  [Few drops of rosewater]
                                  [Few drops of pink liquid food colouring]
                                  [2 level tbsp icing sugar]
                                     </Text>
                              </View>
                            </View>
                            <View style={{width:width/2 -30,height:width/2+250, 
                                borderWidth:0.5, borderColor:'#dddddd'}}>
                              <View style={{flex:1}} >
                                 <Image
                                   style={{ flex:1, width: null, height:null, 
                                    resizeMode:'cover'}}
                                 source={require('../assets/lavacake.jpg')}/>
                              </View>
                              <View style={{flex:1,alignItems:'flex-start',
                                           justifyContent:'space-evenly', paddingLeft:10}}>
                                     <Text style={{fontSize:14, color:'#b63838'}}>
                                        Lava Cake
                                     </Text>
                                     <Text style={{fontSize:12, fontWeight:'bold'}}>
                                     Spongie cake with melt filling inside
                                     </Text>
                                     <Text style={{fontSize:12}}>
                                     INGREDIENTS :
                                  Baking spray, for spraying custard cups
                                 [1 stick butter]
                                 [2 ounces bittersweet chocolate] 
                                 [2 ounces semisweet chocolate] 
                                 [1 1/4 cups powdered sugar] 
                                 [2 whole eggs]
                                 [3 egg yolks] 
                                 [1 teaspoon vanilla] 
                                 [1/2 cup all-purpose flour] 
                                 Vanilla ice cream, for serving
                                     </Text>
                              </View>
                            </View>
                            <View style={{width:width/2 -30,height:width/2+250, 
                                borderWidth:0.5, borderColor:'#dddddd'}}>
                              <View style={{flex:1}} >
                                 <Image
                                   style={{ flex:1, width: null, height:null, 
                                    resizeMode:'cover'}}
                                 source={require('../assets/bagel.jpg')}/>
                              </View>
                              <View style={{flex:1,alignItems:'flex-start',
                                           justifyContent:'space-evenly', paddingLeft:10}}>
                                     <Text style={{fontSize:14, color:'#b63838'}}>
                                        Bagel
                                     </Text>
                                     <Text style={{fontSize:12, fontWeight:'bold'}}>
                                     American bread dougnut.
                                     </Text>
                                     <Text style={{fontSize:12}}>
                                     INGREDIENTS :
                                  [2 teaspoons active dry yeast]
                                  [1 ½ tablespoons (4 ½ teaspoons) granulated sugar]
                                  [1 ¼ cups / 300ml warm water (you may need ± ¼ cup /60ml more)]
                                  [3 ½ cups (500g) bread flour or high gluten flour(will need extra for kneading)]
                                  [1 ½ teaspoons salt]
                                  Total time : 1 hour 45 minutes"
                                     </Text>
                              </View>
                            </View></View>
                           
     
 
 <View style={{ flex: 1, marginBottom:20, marginTop:40, justifyContent: 'center' }}>
        <Button 
        full
        rounded
       
         color="navy"
          title="Malay"
          onPress={() => this.props.navigation.navigate('Malay')}
        />
        <Button 
        full
        rounded
       
          color="indigo"
          title="Western"
          onPress={() => this.props.navigation.navigate('Western')}
        />
          <Button 
          full
          rounded
         
          color="rebeccapurple"
          title="Video"
          onPress={() => this.props.navigation.navigate('Video')}
        />
     </View>
                   </View>
                   </ScrollView>
    );
  }
}

class MalayScreen extends React.Component {
  render() {
    return (
        <ScrollView scrollEventThrottle = {16} >
        <View style={{flex:1, backgroundColor:'powderblue',paddingTop:20}} >
        <View style={{ marginTop:40}}>
        <Text style={{fontSize:24, fontWeight:'700',
        paddingHorizontal:20}}>
            MALAY CUISINE
        </Text>
        <View style={{paddingHorizontal:20, marginTop:20,
        flexDirection:'row', flexWrap:'wrap', 
        justifyContent:'space-between'}}>
            <View style={{width:width/2 -30,height:width/2 +250, 
                                borderWidth:0.5, borderColor:'#dddddd'}}>
                              <View style={{flex:1}} >
                                 <Image
                                   style={{ flex:1, width: null, height:null, 
                                    resizeMode:'cover'}}
                                 source={require('../assets/tok.jpg')}/>
                              </View>
                              <View style={{flex:1,alignItems:'flex-start',
                                           justifyContent:'space-evenly', paddingLeft:10}}>
                                     <Text style={{fontSize:14, color:'#b63838'}}>
                                     Rendang Daging Tok
                                     </Text>
                                     <Text style={{fontSize:12, fontWeight:'bold'}}>
                                     Special Beef Rendang that called Rendang Tok.
                                     </Text>
                                     <Text style={{fontSize:12}}>
                                     INGREDIENTS :
                      [1 kilo daging lembu]
                      [santan dari sebiji kelapa] 
                      [2 sudu besar kerisik]
                      [2-3 sudu besar gula merah] 
                      [2 sudu besar serbuk kari daging]
                      [kulit kayu manis, bunga cengkih, buah pelaga, bunga lawang]
                      [2 biji bawang besar]
                      [1/4 inci halia]
                      [1 helai daun kunyit]
                                     </Text></View></View>
                                     <View style={{width:width/2 -30,height:width/2 +250, 
                                borderWidth:0.5, borderColor:'#dddddd'}}>
                              <View style={{flex:1}} >
                                 <Image
                                   style={{ flex:1, width: null, height:null, 
                                    resizeMode:'cover'}}
                                 source={require('../assets/bawal3rasa.jpg')}/>
                              </View>
                              <View style={{flex:1,alignItems:'flex-start',
                                           justifyContent:'space-evenly', paddingLeft:10}}>
                                     <Text style={{fontSize:14, color:'#b63838'}}>
                                        Ikan Bawal 3 Rasa
                                     </Text>
                                     <Text style={{fontSize:12, fontWeight:'bold'}}>
                                     Bawal Fish with Sweet, Sour and Spicy Tastes.
                                     </Text>
                                     <Text style={{fontSize:12}}>
                                     INGREDIENTS :
                      [1 ekor ikan bwl saiz besar]
                      [3 ulas bwg putih dan 2 biji cili padi diketuk]
                      [3 sudu besar sos cili thai]
                      [4 sudu besar sos tiram]
                      [1 sudu besar sos ikan]
                      [1 hiris air asam limau nipis]
                      [Gula dan perasa] 
                                     </Text></View></View>
                                     <View style={{width:width/2 -30,height:width/2 +250, 
                                borderWidth:0.5, borderColor:'#dddddd'}}>
                              <View style={{flex:1}} >
                                 <Image
                                   style={{ flex:1, width: null, height:null, 
                                    resizeMode:'cover'}}
                                 source={require('../assets/masaklemakayam.jpg')}/>
                              </View>
                              <View style={{flex:1,alignItems:'flex-start',
                                           justifyContent:'space-evenly', paddingLeft:10}}>
                                     <Text style={{fontSize:14, color:'#b63838'}}>
                                     Ayam Masak Lemak Cili Api
                                     </Text>
                                     <Text style={{fontSize:12, fontWeight:'bold'}}>
                                     Chicken cook with spicy chillies and coconut milk.
                                     </Text>
                                     <Text style={{fontSize:12}}>
                                     INGREDIENTS :
                      [1 ekor ayam]
                      [1 liter santan]
                      [1 batang serai, dititik]
                      [1 helai daun kunyit]
                      Bahan untuk dikisar:
                      [10 batang cili padi merah]
                      [10 batang cili padi hijau]
                      [3 biji bawang besar]
                      [1 ulas bawang putih] 
                      [1 inci halia]
                      [1 inci kunyit hidup] 
                                     </Text></View></View>
                                     <View style={{width:width/2 -30,height:width/2 +250, 
                                borderWidth:0.5, borderColor:'#dddddd'}}>
                              <View style={{flex:1}} >
                                 <Image
                                   style={{ flex:1, width: null, height:null, 
                                    resizeMode:'cover'}}
                                 source={require('../assets/nasilemak.jpg')}/>
                              </View>
                              <View style={{flex:1,alignItems:'flex-start',
                                           justifyContent:'space-evenly', paddingLeft:10}}>
                                     <Text style={{fontSize:14, color:'#b63838'}}>
                                        Nasi Lemak
                                     </Text>
                                     <Text style={{fontSize:12, fontWeight:'bold'}}>
                                     Tasty rice cook with coconut milk and mix with sambal.
                                     </Text>
                                     <Text style={{fontSize:12}}>
                                     INGREDIENTS :
                      [1 Kilogram rice (Nasi Lemak)]
                      [6 Cups water (Nasi Lemak)]
                      [200 Grams thick coconut milk (Nasi Lemak)]
                      [3 screw pine leaves (Nasi Lemak)]
                      [1 Teaspoon sugar]
                                     </Text></View></View>
            </View></View></View></ScrollView>
    );
  }
}

class WesternScreen extends React.Component {
    render() {
      return (
        <ScrollView scrollEventThrottle = {16} >
        <View style={{flex:1, backgroundColor:'bisque',paddingTop:20}} >
        <View style={{ marginTop:40}}>
        <Text style={{fontSize:24, fontWeight:'700',
        paddingHorizontal:20}}>
            WESTERN CUISINE
        </Text>
        <View style={{paddingHorizontal:20, marginTop:20,
        flexDirection:'row', flexWrap:'wrap', 
        justifyContent:'space-between'}}>
            <View style={{width:width/2 -30,height:width/2 +250, 
                                borderWidth:0.5, borderColor:'#dddddd'}}>
                              <View style={{flex:1}} >
                                 <Image
                                   style={{ flex:1, width: null, height:null, 
                                    resizeMode:'cover'}}
                                 source={require('../assets/clamchowder.jpg')}/>
                              </View>
                              <View style={{flex:1,alignItems:'flex-start',
                                           justifyContent:'space-evenly', paddingLeft:10}}>
                                     <Text style={{fontSize:14, color:'#b63838'}}>
                                        Clam Chowder
                                     </Text>
                                     <Text style={{fontSize:12, fontWeight:'bold'}}>
                                     Home made clam chowder is absolutely creamy.
                                     </Text>
                                     <Text style={{fontSize:12}}>
                                     INGREDIENTS :
                      [3 1/2 cups water]
                      [5 dozen cherrystone clams, scrubbed and rinsed]
                      [4 tablespoons unsalted butter]
                      [1/4 cup all-purpose flour]
                      [2 to 3 slices of bacon, cut into 1/2 -inch pieces]
                                     </Text></View></View>
                                     <View style={{width:width/2 -30,height:width/2 +250, 
                                borderWidth:0.5, borderColor:'#dddddd'}}>
                              <View style={{flex:1}} >
                                 <Image
                                   style={{ flex:1, width: null, height:null, 
                                    resizeMode:'cover'}}
                                 source={require('../assets/deepdishpizza.jpg')}/>
                              </View>
                              <View style={{flex:1,alignItems:'flex-start',
                                           justifyContent:'space-evenly', paddingLeft:10}}>
                                     <Text style={{fontSize:14, color:'#b63838'}}>
                                     Deep DISH Pizza
                                     </Text>
                                     <Text style={{fontSize:12, fontWeight:'bold'}}>
                                     Special pizza with thick crust look and taste different.
                                     </Text>
                                     <Text style={{fontSize:12}}>
                                     INGREDIENTS :
                      For the sauce: [onion, salt, red pepper flakes, and oregano, and sauté until golden brown,
                      garlic, sugar, and crushed tomatoes.] For the dough: active dry yeast, sugar, warm water,
                      flour, cornmeal, and salt.
                                     </Text></View></View>
                                     <View style={{width:width/2 -30,height:width/2 +250, 
                                borderWidth:0.5, borderColor:'#dddddd'}}>
                              <View style={{flex:1}} >
                                 <Image
                                   style={{ flex:1, width: null, height:null, 
                                    resizeMode:'cover'}}
                                 source={require('../assets/tacos.jpg')}/>
                              </View>
                              <View style={{flex:1,alignItems:'flex-start',
                                           justifyContent:'space-evenly', paddingLeft:10}}>
                                     <Text style={{fontSize:14, color:'#b63838'}}>
                                     Beef Tacos
                                     </Text>
                                     <Text style={{fontSize:12, fontWeight:'bold'}}>
                                     Crispy ground beef tacos are filled with seasoned meat, lettuce, cheese and tomatoes.
                                     </Text>
                                     <Text style={{fontSize:12}}>
                                     INGREDIENTS :
                      [2 teaspoons vegetable oil]
                      [1 pound lean ground beef]
                      [1/2 cup onion (finely chopped)]
                      [1 tablespoon chili powder]
                      [1/4 teaspoon garlic powder]
                      [2 tomatoes (cut)]
                      [cheese]
                      [3 slices prata bread (deep fried)]
                                     </Text></View></View>
                                     <View style={{width:width/2 -30,height:width/2 +250, 
                                borderWidth:0.5, borderColor:'#dddddd'}}>
                              <View style={{flex:1}} >
                                 <Image
                                   style={{ flex:1, width: null, height:null, 
                                    resizeMode:'cover'}}
                                 source={require('../assets/ratatouille.jpg')}/>
                              </View>
                              <View style={{flex:1,alignItems:'flex-start',
                                           justifyContent:'space-evenly', paddingLeft:10}}>
                                     <Text style={{fontSize:14, color:'#b63838'}}>
                                     Ratatouille
                                     </Text>
                                     <Text style={{fontSize:12, fontWeight:'bold'}}>
                                     French home made baked vegetables.
                                     </Text>
                                     <Text style={{fontSize:12}}>
                                     INGREDIENTS :
                      [1 yellow pepper]
                      [1 orange pepper]
                      [2 tablespoons extra virgin olive oil[]
                      [2 cloves garlic, minced]
                      [½ small yellow onion, finely dice]
                                     </Text></View></View>
                                     <View style={{width:width/2 -30,height:width/2 +250, 
                                borderWidth:0.5, borderColor:'#dddddd'}}>
                              <View style={{flex:1}} >
                                 <Image
                                   style={{ flex:1, width: null, height:null, 
                                    resizeMode:'cover'}}
                                 source={require('../assets/irishss.jpg')}/>
                              </View>
                              <View style={{flex:1,alignItems:'flex-start',
                                           justifyContent:'space-evenly', paddingLeft:10}}>
                                     <Text style={{fontSize:14, color:'#b63838'}}>
                                     Irish Beef Stew
                                     </Text>
                                     <Text style={{fontSize:12, fontWeight:'bold'}}>
                                     Irish Stew from Ireland is as hearty as it gets.
                                     </Text>
                                     <Text style={{fontSize:12}}>
                                     IINGREDIENTS :
                      [3 tbsp extra-virgin olive oil, divided]
                      [2 lb. , beef chuck stew meat] [cubed into 1 pieces Kosher salt]
                      [Freshly ground black pepper]
                      [1 , onion, chopped]
                                     </Text></View></View>
                                     <View style={{width:width/2 -30,height:width/2 +250, 
                                borderWidth:0.5, borderColor:'#dddddd'}}>
                              <View style={{flex:1}} >
                                 <Image
                                   style={{ flex:1, width: null, height:null, 
                                    resizeMode:'cover'}}
                                 source={require('../assets/beefsteak.jpg')}/>
                              </View>
                              <View style={{flex:1,alignItems:'flex-start',
                                           justifyContent:'space-evenly', paddingLeft:10}}>
                                     <Text style={{fontSize:14, color:'#b63838'}}>
                                     Beef Steak
                                     </Text>
                                     <Text style={{fontSize:12, fontWeight:'bold'}}>
                                     Thick cut ribeye steaks served with blackpepper sauce.
                                     </Text>
                                     <Text style={{fontSize:12}}>
                                     INGREDIENTS :
                      [2 large ribeye steaks (1 1/2 to 2 inches thick)]
                      [kosher salt (as needed for seasoning)]
                      [black pepper (as needed for seasoning)]
                      [1 tablespoon vegetable oil ((15ml))]
                      [2 tablespoons unsalted butter ((28g) divided)]
                                     </Text></View></View>
            </View></View></View></ScrollView>
      );
    }
  }

  class VideoScreen extends React.Component {
    render() {
      return (
        <WebView
     
        source={{
          uri: 'https://www.youtube.com/watch?v=gvmleSvhXvg',
        }}
      />
      );
    }
  }

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Malay: MalayScreen,
    Western: WesternScreen,
    Video:VideoScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class LoginScreen extends React.Component {
  render() {
    return <AppContainer />;
  }
}
