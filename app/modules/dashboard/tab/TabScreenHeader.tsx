
import { images } from '@app/assets/images';
import colors from '@app/theme/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header, HeaderProps } from '@rneui/base';
import React, { memo, useRef } from 'react'
import { GestureResponderEvent, Image, Text, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
interface TabScreenHeaderProps extends HeaderProps {
    // navigation?: DrawerNavigationProp<any, any>
    navigation?: NativeStackNavigationProp<any, any>
    onSearchPress?: (event: GestureResponderEvent) => void;
    showSearch?: boolean;

}
//tab header screen component
const TabScreenHeader = ({ navigation, onSearchPress, showSearch = false }: TabScreenHeaderProps) => {

    return (
        <View style={{backgroundColor:'white'}}>
            {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={colors.gradientPrimary}> */}
                <Header
                    rightContainerStyle={{ padding: 0, justifyContent: 'center' }}
                    centerContainerStyle={{ flex: 0 }}
                    centerComponent={<>
                     <View>
                     <Image
                        source={images.header_logo}
                        resizeMode="contain"
                    />
                     </View>
                    </>} 
                    containerStyle={{ backgroundColor: 'transparent', width: '100%', }}
                />
               
            {/* </LinearGradient> */}
        </View>
    )
}

export default memo(TabScreenHeader)
