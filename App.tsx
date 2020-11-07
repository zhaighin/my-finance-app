/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { FC, useState } from 'react';
import { Text, View, StyleSheet, PanResponder, TouchableOpacity, ViewPropTypes } from 'react-native';
import { Icon } from 'react-native-elements'
import Button from './component/button';
import Row from './component/row';

const styles = StyleSheet.create({

  container: {
    flex: 1 // fill over the space
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // to make the calculator looks solid
    borderStyle: 'solid',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
    paddingTop: 0,
    margin: 0
  },
  displayText: {
    textAlign: 'right',
    fontSize: 60
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
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{total}</Text>
      </View>
      <Row>
        <Button onPress={onReset} theme="secondary" label='C'></Button>
        <Button onPress={() => onClick('*')} theme="secondary" label='*'></Button>
        <Button onPress={() => onClick('/')} theme="secondary" label='/'></Button>
        <Button onPress={() => onClick('')} theme="secondary" label='backspace' isIcon={true}></Button>
      </Row>
      <Row>
        <Button onPress={() => onClick('1')} label='1'></Button>
        <Button onPress={() => onClick('2')} label='2'></Button>
        <Button onPress={() => onClick('3')} label='3'></Button>
        <Button onPress={() => onClick('-')} theme="secondary" label='-'></Button>
      </Row>
      <Row>
        <Button onPress={() => onClick('4')} label='4'></Button>
        <Button onPress={() => onClick('5')} label='5'></Button>
        <Button onPress={() => onClick('6')} label='6'></Button>
        <Button onPress={() => onClick('+')} theme="secondary" label='+'></Button>
      </Row>
      <Row>
        <View style={{}}>
          <Row>
            <Button onPress={() => onClick('7')} label='7'></Button>
            <Button onPress={() => onClick('8')} label='8'></Button>
            <Button onPress={() => onClick('9')} label='9'></Button>
          </Row>

          <Row>
            <Button onPress={() => onClick('.')} label='.'></Button>
            <Button onPress={() => onClick('0')} label='0'></Button>
            <Button onPress={() => onClick('')} label='+/-'></Button>
          </Row>
        </View>
        <Button size="double" theme="accent" onPress={onEval} label='='></Button>
      </Row>


    </View>
  )
}

export default App;
