/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { FC, useState } from 'react';
import { Text, View, StyleSheet, PanResponder, TouchableOpacity, ViewPropTypes } from 'react-native';
import Button from './component/button';
import Row from './component/row';
import * as CONST from './util/const';

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
  const [total, setTotal] = useState<string>('0');
  // to prevent backspace error
  const [finalize, setFinalize] = useState<boolean>(false);

  const onClick = (item: string) => {
    // if input is operator, validate previous input is an operator
    // if yes, replace it, else add
    // if input is number, add
    // if is backspace, slice the last character
    if (checkIsOperator(item) && !validateInput()) {
      setTotal(prevTotal => {
        const replace = prevTotal.slice(0, -1);
        return replace + item;
      });
    } else if (item === CONST.BACKSPACE) {
      if (finalize) {
        return;
      }
      setTotal(prevTotal => prevTotal.slice(0, -1));
    } else {
      setTotal(prevTotal => {
        if ((prevTotal == '0' || prevTotal == 'Infinity') && !checkIsOperator(item)) {
          if (item == '0' || item === '00') {
            return '0';
          }
          return item;
        }

        return prevTotal + item;
      });
      setFinalize(false);
    }
  }

  const checkIsOperator = (text: string) => {
    switch (text) {
      case CONST.PLUS:
      case CONST.MINUS:
      case CONST.MULTIPLY:
      case CONST.DIVIDE:
        return true;
    }

    return false;
  }

  const onReset = () => {
    setTotal('0');
  }

  const validateInput = () => {
    const text = total;

    if (finalize) {
      return true;
    }

    switch (text.slice(-1)) {
      case CONST.PLUS:
      case CONST.MINUS:
      case CONST.MULTIPLY:
      case CONST.DIVIDE:
        return false;
    }

    return true;
  }

  const onEval = () => {
    if (validateInput()) {
      // evaluate code expression
      setTotal(prevTotal => eval(prevTotal));
      setFinalize(true);
    }
  }

  const renderButton = (label: string, theme?: string, isIcon?: boolean) => {
    let action;
    let size;

    if (label == CONST.CLEAR) {
      action = onReset;
    } else if (label == CONST.EQUAL) {
      action = onEval;
      size = "double";
    } else {
      action = () => onClick(label);
    }

    return (<Button onPress={action} theme={theme} label={label} isIcon={isIcon} size={size}></Button>)
  }

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{total}</Text>
      </View>
      <Row>
        {renderButton(CONST.CLEAR, "secondary")}
        {renderButton(CONST.MULTIPLY, "secondary")}
        {renderButton(CONST.DIVIDE, "secondary")}
        {renderButton(CONST.BACKSPACE, "secondary", true)}
      </Row>
      <Row>
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton(CONST.MINUS, "secondary")}
      </Row>
      <Row>
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton(CONST.PLUS, "secondary")}
      </Row>
      <Row>
        <View style={{}}>
          <Row>
            {renderButton('1')}
            {renderButton('2')}
            {renderButton('3')}
          </Row>
          <Row>
            {renderButton('.')}
            {renderButton('0')}
            {renderButton('00')}
          </Row>
        </View>
        {renderButton(CONST.EQUAL, "accent")}
      </Row>
    </View>
  )
}

export default App;
