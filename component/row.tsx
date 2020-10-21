import React, { FC } from 'react';
import { View } from 'react-native';


type Props = {
    children: JSX.Element[];
}

// const Row = ({ children }: Props) => (

//         <View style={{ flexDirection: "row" }}>{children}</View>
// )

const Row: FC<Props> = (props) => {
    const { children } = props;
    return (
        <View style={{ flexDirection: "row" }}>{children}</View>
    );
}


export default Row;