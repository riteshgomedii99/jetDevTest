import { FavoriteIcon } from '@app/assets/icons';
import { images } from '@app/assets/images';
import colors from '@app/theme/colors';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Card } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

import { scale, verticalScale } from 'react-native-size-matters';
// user base card
const UserCard = ({ item, favoriteClick }: { item: any, favoriteClick: any }) => {
    // console.warn("item", item);

    return (
        <Card key={item?.id?.name} style={{ marginLeft: scale(20), marginRight: scale(16), marginVertical: verticalScale(3), backgroundColor: colors.white }}>
            <View style={{ flexDirection: 'row', paddingVertical: verticalScale(16), alignItems: "center", }}>

                <View style={{ flex: 0, marginLeft: scale(-8) }}>
                    <Avatar.Image size={55} source={{ uri: item?.picture?.medium }} />
                </View>

                <View style={{ flex: 1, marginLeft: scale(10) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: colors.black, fontSize: RFValue(13) }}>
                            {item?.name?.first} {item?.name?.last}
                        </Text>
                        <TouchableOpacity style={{ marginRight: scale(10) }} onPress={favoriteClick}>
                            {item?.status ?
                                <Image source={images.favorite_icon} style={{ width: RFValue(20), height: RFValue(20) }} />
                                :
                                <Image source={images.un_favorite_icon} style={{ width: RFValue(20), height: RFValue(20) }} />
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={images.location}
                            resizeMode="contain" style={{ marginTop: verticalScale(3) }}
                        />
                        <Text style={{ marginLeft: RFValue(5), color: colors.lightGray, fontSize: RFValue(12) }}>
                            {item?.location?.country} {item?.location?.state}
                        </Text>
                    </View>

                </View>

            </View>


        </Card>
    )
}

export default UserCard