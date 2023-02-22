import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, TextInput, Gap, Button, Select} from '../../components';

const SignUpAddress = () => {
  return (
    <View style={styles.page}>
      <Header
        title="Address"
        subTitle="Make sure it's valid"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput label="Phone Number" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type your email address" />
        <Gap height={16} />
        <TextInput label="House No." placeholder="Type your password" />
        <Gap height={16} />
        <Select />
        <Gap height={24} />
        <Button text="Sign Up Now" />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
