import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    }
  })

type Props = {
    onPress: () => void
    label: string
}

const Button: FC<Props> = (props) => {
    const { onPress, label } = props;

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>{label}</Text>
        </TouchableOpacity>
    );
}

export default Button;