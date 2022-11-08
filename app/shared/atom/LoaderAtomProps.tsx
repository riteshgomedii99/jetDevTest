import { getDimensionScreen } from "@app/core/helpers/getDimensionScreen";
import colors from "@app/theme/colors";
import React from "react";
import { ActivityIndicatorProps, StyleSheet, View } from "react-native";

import {Flow} from 'react-native-animated-spinkit'
import { useSelector } from "react-redux";
import { RootState } from "@app/store";


interface LoaderAtomProps extends ActivityIndicatorProps {
}
const { width, height } = getDimensionScreen();

//loader commponennt item props
const LoaderAtom = (props: LoaderAtomProps) => {
    const { loader } = useSelector((state: RootState) => state)
    return (
        <React.Fragment>
            {loader &&
                <View style={styles.container}>
                    <Flow size={50} color="#556ee6" />
                </View>
            }
        </React.Fragment>
    )
}


export default LoaderAtom

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        width,
        height,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
        opacity: 0.4
    }
})

