import React, { FC } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;
const buttonHeight = screen.width / 5;

const styles = StyleSheet.create({
    button: {
        borderStyle: 'solid',
        borderWidth: 1,
        height: buttonHeight,
        width: buttonWidth
    },
    buttonDouble: {
        height: buttonHeight * 2,
        width: buttonWidth
    },
    buttonAccent: {
        backgroundColor: "#f09a36"
    },
    buttonSecondary: {
        backgroundColor: "#a6a6a6"
    },
    textSecondary: {
        color: "#060606"
    },
    text: {
        color: 'black',
        fontSize: 25
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

type Props = {
    onPress?: () => void
    label: string,
    size?: string,
    theme?: string,
    isIcon?: boolean
}

const Button: FC<Props> = (props) => {
    const { onPress, label, size, theme, isIcon } = props;
    const buttonStyles: any = [styles.button];
    const textStyles: any = [styles.text];

    if (size === "double") {
        buttonStyles.push(styles.buttonDouble);
    }

    if (theme === "secondary") {
        buttonStyles.push(styles.buttonSecondary);
        textStyles.push(styles.textSecondary);
    } else if (theme === "accent") {
        buttonStyles.push(styles.buttonAccent);
    }

    return (
        <View>
            <TouchableOpacity style={buttonStyles} onPress={onPress}>
                <View style={styles.container}>{
                    isIcon ? <Icon
                        name={label}
                        type='font-awesome-5'
                    /> :
                        <Text style={textStyles}>{label}</Text>
                }

                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Button;