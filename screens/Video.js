import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    WebView,
    ScrollView,
    TouchableHighlight,
    Linking
    
} from "react-native";

class Video extends Component {
    
    render() {
        return (
            <WebView
            style={styles.container}
            javaScriptEnabled={true}
            source={{
              uri: 'https://www.youtube.com/watch?v=gvmleSvhXvg',
            }}
          />
        );
    }
}
export default Video;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


