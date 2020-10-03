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
  const [total, setTotal] = useState<number>(0);

  const onPress = () => {
  }

  // add

  // minus

  // number

  return (
    <View style={styles.container}>
      <Text>{total}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.button}>
          <Text>C</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
          <Text>/</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
          <Text>*</Text>
        </TouchableOpacity >
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.button}>
          <Text>1</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
          <Text>2</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
          <Text>3</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
          <Text>-</Text>
        </TouchableOpacity >
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.button}>
          <Text>4</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
          <Text>5</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
          <Text>6</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
          <Text>+</Text>
        </TouchableOpacity >
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.button}>
          <Text>7</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
          <Text>8</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
          <Text>9</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
          <Text>=</Text>
        </TouchableOpacity >
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.button}>
          <Text></Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
          <Text>0</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
          <Text>.</Text>
        </TouchableOpacity >
      </View>
    </View>
  )
}

export default App;
