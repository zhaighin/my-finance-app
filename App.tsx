/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { FC, useState } from 'react';
import { Text, View, StyleSheet, PanResponder, TouchableOpacity, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
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
  // add

  // minus

  // number

  return (
    <View style={styles.container}>
      <Text>{total}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.button} onPress={() => onReset()}>
          <Text>C</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={() => onClick('/')}>
          <Text>/</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={() => onClick('*')}>
          <Text>*</Text>
        </TouchableOpacity >
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.button} onPress={() => onClick('1')}>
          <Text>1</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={() => onClick('2')}>
          <Text>2</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={() => onClick('3')}>
          <Text>3</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={() => onClick('-')}>
          <Text>-</Text>
        </TouchableOpacity >
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.button} onPress={() => onClick('4')}>
          <Text>4</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={() => onClick('5')}>
          <Text>5</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={() => onClick('6')}>
          <Text>6</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={() => onClick('+')}>
          <Text>+</Text>
        </TouchableOpacity >
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.button} onPress={() => onClick('7')}>
          <Text>7</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={() => onClick('8')}>
          <Text>8</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={() => onClick('9')}>
          <Text>9</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={onEval}>
          <Text>=</Text>
        </TouchableOpacity >
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.button}>
          <Text></Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={() => onClick('0')}>
          <Text>0</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={() => onClick('.')}>
          <Text>.</Text>
        </TouchableOpacity >
      </View>
    </View>
  )
}

export default App;
