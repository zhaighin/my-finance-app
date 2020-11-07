import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';


type Props = {
    children: JSX.Element[] | JSX.Element;
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row', // align children from left to right
        alignContent: 'stretch',
        flexWrap: 'wrap'
    }
})

const Row: FC<Props> = (props) => {
    const { children } = props;
    return (
        <View style={styles.row}>{children}</View>
    );
}


export default Row;