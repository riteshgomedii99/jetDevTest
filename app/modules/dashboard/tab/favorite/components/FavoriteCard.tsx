import { images } from '@app/assets/images';
import colors from '@app/theme/colors';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
// favorite component card
const FavoriteCard = ({ item, favoriteClick }: { item: any, favoriteClick: any }) => {
    return (
        <View key={item?.id?.name} style={{ paddingHorizontal: 10, backgroundColor: colors.white }}>
            <View style={{ flexDirection: 'row', paddingVertical: verticalScale(10), alignItems: "center", }}>
                <View style={{ flex: 0 }}>
                    <Avatar.Image size={50} source={{ uri: item?.picture?.medium }} />
                </View>
                <View style={{ flex: 1, marginLeft: scale(10) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: colors.black, fontSize: RFValue(14) }}>
                            {item?.name?.first} {item?.name?.last}
                        </Text>
                        <TouchableOpacity style={{ marginRight: scale(10) }} onPress={favoriteClick}>
                            <Image source={images.favorite_icon} style={{ width: RFValue(20), height: RFValue(20) }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FavoriteCard



