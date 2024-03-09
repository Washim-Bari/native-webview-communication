import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ReactNativeComponent = ({route}) => {
  const {someData} = route.params;
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Received Data: {someData}</Text>
      <Button title="Go Back to Web Page" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ReactNativeComponent;
