import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import StarRating from 'react-native-star-rating'
class Dessert extends Component {
    render() {
        return (
            <View style={{width:this.props.width/2 - 30,height:this.props.width/2 +250, 
                borderWidth:0.5, borderColor:'#dddddd'}}>
              <View style={{flex:1}} >
                 <Image
                   style={{ flex:1, width: null, height:null, 
                    resizeMode:'cover'}}
                    source={this.props.imageUri}/>
                {/* //  source={require('../../../assets/Keria.jpg')} */}
              </View>
              <View style={{flex:1,alignItems:'flex-start',
                           justifyContent:'space-evenly', paddingLeft:10}}>
                     <Text style={{fontSize:12, color:'#b63838'}}>
                        {this.props.name}
                     </Text>
                     <Text style={{fontSize:10, fontWeight:'bold'}}>
                         {this.props.desc}
                         
                     </Text>
                     <Text style={{fontSize:10}}>
                       {this.props.ingredients}
                     </Text>
                     <StarRating
                     disable={true}
                     maxStars={5}
                     rating={this.props.rating}
                     starSize={10}
                        />
              </View>
            </View>
        );
    }
}
export default Dessert;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});