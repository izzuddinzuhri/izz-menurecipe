import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import firebase from 'firebase';
import LoginScreen from './auth/LoginScreen'

import LoadingScreen from'./auth/LoadingScreen'

// import MyNavigator from './navigator/MyNavigator';


const firebaseConfig = {
  apiKey: "AIzaSyAOhJRWXpwrf0LdW5YTyu1tJZrbPswb-Y0",
  authDomain: "auth-email-f3aa5.firebaseapp.com",
  databaseURL: "https://auth-email-f3aa5.firebaseio.com",
  projectId: "auth-email-f3aa5",
  storageBucket: "",
  messagingSenderId: "76420541950",
  appId: "1:76420541950:web:a8f95446b639b324"
};

firebase.initializeApp(firebaseConfig);


const AuthStack = createStackNavigator({ LoadingScreen: LoadingScreen });
const AppStack = createStackNavigator({ LoginScreen: LoginScreen });

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
    
  },

));



// import { Container, Content, Header, Form, Input, Item, Button, Label} from'native-base'



//   class App extends React.Component {

//   constructor(props){
//     super(props)

 
   

//     this.state=({
//       email:'',
//       password:'',
     
//     })
    
//   }

//   componentDidMount(){
//     this.checkIfLoggedIn();
// }

//  checkIfLoggedIn = () => {

//     firebase.auth().onAuthStateChanged(function(user)
//     {
//         if(user)
//         {
//            this.props.navigation.navigate('LoginScreen');
//         }
//         else
//         {
//             this.props.navigation.navigate('App');
//         }
//     }.bind(this));
//  };

//   signUpUser=(email,password)=>{
      
//     try{
//          if(this.state.password.length<8){
//            alert("Enter at least 8 characters")
//            return;
//          }

//          firebase.auth().createUserWithEmailAndPassword(email,password)
//     }
//     catch(error){
//       console.log(error.toString())
//     }


//   }
  
//   loginUser=(email,password)=>{

//     try{
//        firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
//         //  console.log('user')
//         if(user)
//             {
//                this.props.navigation.navigate('App');
//             }
//             else
//             {
//                this.props.navigation.navigate('Auth');
//             }
//         }.bind(this));
//       //  })
       
//     }
//     catch(error){
//       console.log(error.toString())
//     }
//   }

//   render (){
//   return (
    
      

//    <Container style={styles.container}>
//     <Form>
//       <Item floatingLabel>
//         <Label>
//           Email
//         </Label>
//         <Input 
//            autoCorrect={false}
//            autoCapitalize="none"
//            onChangeText={(email)=>this.setState({email})}/>
//       </Item>
//       <Item floatingLabel>
//         <Label>
//           Password
//         </Label>
//         <Input 
//            secureTextEntry={true}
//            autoCorrect={false}
//            autoCapitalize="none"
//            onChangeText={(password)=>this.setState({password})}/>
//       </Item>
//       <Button style={{marginTop:10}}
//       full 
//       rounded 
//       success
//       onPress={()=>this.loginUser(this.state.email,this.state.password)}>
//         <Text style={{color:'white'}}>
//           Login
//         </Text>
//       </Button>
//       <Button style={{marginTop:10}}
//       full 
//       rounded 
//       primary
//       onPress={()=>this.signUpUser(this.state.email,this.state.password)}>
//         <Text style={{color:'white'}}>
//           Sign Up
//         </Text>
//       </Button>
//     </Form>

//    </Container>
//   );
// }
// }


// export default StackNavigator({
//   Home:{
//     screen:LoginScreen
//   },
// });
// const AppStack = createStackNavigator({ Home: LoginScreen });
// const AuthStack = createStackNavigator({ App: App });
// const AppSwitchNavigator = createSwitchNavigator({
//   LoginScreen : LoginScreen,
  
// });

//  createAppContainer(createSwitchNavigator(
//    {
//      LoginScreen:LoginScreen,
//      App:App,
//    }
//  ));


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,
    justifyContent: 'center',
  },
});
// const AppStack = createStackNavigator({ LoginScreen: LoginScreen });
// const AuthStack = createStackNavigator({ App: App });

// export default createAppContainer(createSwitchNavigator(
//   {
//     App: AppStack,
//     Auth: AuthStack,
//   }
// ));