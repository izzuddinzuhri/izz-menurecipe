import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions, 
    ScrollView
} from "react-native";
import Dessert from './components/Home/Dessert';
const {height,width} = Dimensions.get('window');
class Malay extends Component {
    render() {
        return (
            <ScrollView scrollEventThrottle = {16} >
            <View style={{flex:1, backgroundColor:'powderblue',paddingTop:20}} >
            <View style={{ marginTop:40}}>
            <Text style={{fontSize:24, fontWeight:'700',
            paddingHorizontal:20}}>
                Malay Cuisines
            </Text>
            <View style={{paddingHorizontal:20, marginTop:20,
            flexDirection:'row', flexWrap:'wrap', 
            justifyContent:'space-between'}}>
                   <Dessert width={width}
                      imageUri={require('../assets/bawal3rasa.jpg')}
                      name="Ikan Bawal 3 Rasa"
                      desc="Bawal Fish with Sweet, Sour and Spicy Tastes"
                      ingredients="INGREDIENTS :
                      [1 ekor ikan bwl saiz besar]
                      [3 ulas bwg putih dan 2 biji cili padi diketuk]
                      [3 sudu besar sos cili thai]
                      [4 sudu besar sos tiram]
                      [1 sudu besar sos ikan]
                      [1 hiris air asam limau nipis]
                      [Gula dan perasa]"
                     rating={5} />
                     <Dessert width={width}
                      imageUri={require('../assets/gulaiitik.jpg')}
                      name="Gulai itik"
                      desc="Itik Curry rich with flavor"
                      ingredients="INGREDIENTS :
                      [800 gram itik serati yang telah dipotong]
                        [1 inci halia, hiris]
                        [4 ulas bawang putih, diketuk]
                        [3 biji kentang, kupas, belah 4 dan rendam]
                        [200 ml santan kara] 
                        [1/4 cawan air panas]
                        [1 keping asam gelugor]
                        [2 camca besar penuh serbuk kari daging Baba's]
                        [1 camca besar penuh serbuk ketumbar]
                        [3 camca besar penuh cili kisar]
                        [1/2 camca besar gula Melaka]
                        [Garam dan air secukup rasa]"
                         rating={5} />
                     <Dessert width={width}
                      imageUri={require('../assets/masaklemakayam.jpg')}
                      name="Ayam Masak Lemak Cili Api"
                      desc="Chicken cook with spicy chillies and coconut milk"
                      ingredients="INGREDIENTS :
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
                      [1 inci kunyit hidup]"
                     rating={4} />
                     <Dessert width={width}
                      imageUri={require('../assets/tok.jpg')}
                      name="Rendang Daging Tok"
                      desc="Special Beef Rendang that called Rendang Tok"
                      ingredients="INGREDIENTS :
                      [1 kilo daging lembu]
                      [santan dari sebiji kelapa] 
                      [2 sudu besar kerisik]
                      [2-3 sudu besar gula merah] 
                      [2 sudu besar serbuk kari daging]
                      [kulit kayu manis, bunga cengkih, buah pelaga, bunga lawang]
                      [2 biji bawang besar]
                      [1/4 inci halia]
                      [1 helai daun kunyit]" 
                      rating={5} />
                     <Dessert width={width}
                      imageUri={require('../assets/nasilemak.jpg')}
                      name="Nasi Lemak"
                      desc="Tasty rice cook with coconut milk and mix with sambal"
                      ingredients="INGREDIENTS :
                      [1 Kilogram rice (Nasi Lemak)]
                      [6 Cups water (Nasi Lemak)]
                      [200 Grams thick coconut milk (Nasi Lemak)]
                      [3 screw pine leaves (Nasi Lemak)]
                      [1 Teaspoon sugar]"
                     rating={5} />
                     <Dessert width={width}
                      imageUri={require('../assets/udangsambal.jpg')}
                      name="Udang Sambal Petai"
                      desc="Prawn cook with chilli paste and petai"
                      ingredients="INGREDIENTS :
                      [15 ekor udang - bersih dan toskan] 
                      [1 papan petai - ambil isinya]
                      [4 sb cili kisar]
                      [4 biji bawang merah]
                      [2 ulas bawang putih]"
                     rating={3} />
                      </View>
                      </View>
                      </View>
                      </ScrollView>
        );
    }
}
export default Malay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});