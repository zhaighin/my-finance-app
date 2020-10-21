/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { FC, useState } from 'react';
import { Text, View, StyleSheet, PanResponder, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import Button from './component/button';
import Row from './component/row';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const App: FC = () => {
  const [total, setTotal] = useState<string>('');

  const onClick = (item: string) => {
    setTotal(prevTotal => prevTotal + item);
  }

  const onReset = () => {
    setTotal('');
  }

  const onEval = () => {
    // evaluate code expression
    setTotal(prevTotal => eval(prevTotal));
  }

  return (
    <View style={styles.container}>
      <Text>{total}</Text>
      <Row>
        <Button onPress={onReset} label='C'></Button>
        <Button onPress={() => onClick('/')} label='/'></Button>
        <Button onPress={() => onClick('*')} label='*'></Button>
        <Button onPress={() => onClick('')} label='back'></Button>
      </Row>
      <Row>
        <Button onPress={() => onClick('1')} label='1'></Button>
        <Button onPress={() => onClick('2')} label='2'></Button>
        <Button onPress={() => onClick('3')} label='3'></Button>
        <Button onPress={() => onClick('-')} label='-'></Button>
      </Row>
      <Row>
        <Button onPress={() => onClick('4')} label='4'></Button>
        <Button onPress={() => onClick('5')} label='5'></Button>
        <Button onPress={() => onClick('6')} label='6'></Button>
        <Button onPress={() => onClick('+')} label='+'></Button>
      </Row>
      <Row>
        <Button onPress={() => onClick('7')} label='7'></Button>
        <Button onPress={() => onClick('8')} label='8'></Button>
        <Button onPress={() => onClick('9')} label='9'></Button>
        <Button onPress={onEval} label='='></Button>
      </Row>
      <Row>
        <Button onPress={() => onClick('')} label=''></Button>
        <Button onPress={() => onClick('0')} label='0'></Button>
        <Button onPress={() => onClick('.')} label='.'></Button>
        <Button onPress={() => onClick('')} label=''></Button>
      </Row>
    </View>
  )
}

export default App;
