import React from 'react';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

const WebViewComponent = () => {
  const navigation = useNavigation();

  const handleMessage = event => {
    const message = event.nativeEvent.data;
    if (message === 'navigateToComponent') {
      // Call the npm package
      navigation.navigate('ReactNativeComponent', {
        someData: 'Data from WebView',
      });
    }
  };

  return (
    <WebView
      source={{
        uri: 'http://192.168.0.102:5500/web/index.html',
      }}
      onMessage={handleMessage}
    />
  );
};

export default WebViewComponent;
