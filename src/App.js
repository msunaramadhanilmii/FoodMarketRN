import React from 'react';
import {SafeAreaView,StatusBar, Text} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView>
         <Text>Hello Food Market RN</Text>
        </SafeAreaView>
    </>
  );
};

export default App;
