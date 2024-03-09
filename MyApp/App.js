import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WebViewComponent from './WebViewComponent';
import ReactNativeComponent from './ReactNativeComponent';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WebViewComponent">
        <Stack.Screen name="WebViewComponent" component={WebViewComponent} />
        <Stack.Screen
          name="ReactNativeComponent"
          component={ReactNativeComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
