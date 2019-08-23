import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    
   
} from "react-native";
import Dessert from './components/Home/Dessert';
const {height,width} = Dimensions.get('window');
class Western extends Component {
    render() {
        return ( 
            <ScrollView scrollEventThrottle = {16} >
            <View style={{flex:1, backgroundColor:'bisque',paddingTop:20}} >
            <View style={{ marginTop:40}}>
            <Text style={{fontSize:24, fontWeight:'700',
            paddingHorizontal:20}}>
                Western Cuisines
            </Text>
            <View style={{paddingHorizontal:20, marginTop:20,
            flexDirection:'row', flexWrap:'wrap', 
            justifyContent:'space-between'}}>
                   <Dessert width={width}
                      imageUri={require('../assets/clamchowder.jpg')}
                      name="Clam Chowder"
                      desc="Home made clam chowder is absolutely creamy"
                      ingredients="INGREDIENTS :
                      [3 1/2 cups water]
                      [5 dozen cherrystone clams, scrubbed and rinsed]
                      [4 tablespoons unsalted butter]
                      [1/4 cup all-purpose flour]
                      [2 to 3 slices of bacon, cut into 1/2 -inch pieces]"
                      rating={3} />
                   <Dessert width={width}
                    imageUri={require('../assets/deepdishpizza.jpg')}
                      name="Deep DISH Pizza"
                      desc="Special pizza with thick crust look and taste different"
                      ingredients="INGREDIENTS :
                      For the sauce: [onion, salt, red pepper flakes, and oregano, and sauté until golden brown,
                      garlic, sugar, and crushed tomatoes.] For the dough: active dry yeast, sugar, warm water,
                      flour, cornmeal, and salt."
                      rating={5} />
                     <Dessert width={width}
                      imageUri={require('../assets/tacos.jpg')}
                      name="Beef Tacos"
                      desc="Crispy ground beef tacos are filled with seasoned meat, lettuce, cheese and tomatoes"
                      ingredients="INGREDIENTS :
                      [2 teaspoons vegetable oil]
                      [1 pound lean ground beef]
                      [1/2 cup onion (finely chopped)]
                      [1 tablespoon chili powder]
                      [1/4 teaspoon garlic powder]
                      [2 tomatoes (cut)]
                      [cheese]
                      [3 slices prata bread (deep fried)]"
                      rating={4} />
                      <Dessert width={width}
                      imageUri={require('../assets/ratatouille.jpg')}
                      name="Ratatouille"
                      desc="French home made baked vegetables"
                      ingredients="INGREDIENTS :
                      [1 yellow pepper]
                      [1 orange pepper]
                      [2 tablespoons extra virgin olive oil[]
                      [2 cloves garlic, minced]
                      [½ small yellow onion, finely dice]"
                      rating={5} />
                      <Dessert width={width}
                      imageUri={require('../assets/irishss.jpg')}
                      name="Irish Beef Stew"
                      desc="Irish Stew from Ireland is as hearty as it gets"
                      ingredients="INGREDIENTS :
                      [3 tbsp extra-virgin olive oil, divided]
                      [2 lb. , beef chuck stew meat] [cubed into 1 pieces Kosher salt]
                      [Freshly ground black pepper]
                      [1 , onion, chopped]"
                      rating={4} />
                      <Dessert width={width}
                      imageUri={require('../assets/beefsteak.jpg')}
                      name="Beef Steak"
                      desc="Thick cut ribeye steaks served with blackpepper sauce"
                      ingredients="INGREDIENTS :
                      [2 large ribeye steaks (1 1/2 to 2 inches thick)]
                      [kosher salt (as needed for seasoning)]
                      [black pepper (as needed for seasoning)]
                      [1 tablespoon vegetable oil ((15ml))]
                      [2 tablespoons unsalted butter ((28g) divided)]"
                      rating={3} />
                      </View>
                      </View>
                      </View>
                      </ScrollView>
                      
                                      
        );
    }
}
export default Western;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});