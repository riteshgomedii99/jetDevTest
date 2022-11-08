import { RootState } from '@app/store'
import { userUnFavorite } from '@app/store/actions/slice.action'
import React, { } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import TabScreenHeader from '../TabScreenHeader'
import FavoriteCard from './components/FavoriteCard'

const FavoriteScreen = () => {
  const { userDataList } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const unFavClick = (item: any) => {
    dispatch(userUnFavorite(item?.login?.username))
  }
  const _renderFavoriteItem = ({ item }: { item: any }) => {
    return (
      <FavoriteCard item={item} favoriteClick={() => unFavClick(item)} />
    )
  }
  return (
    <>
      <TabScreenHeader />
      <View>
        <FlatList
          data={userDataList?.userData.filter((elem: any) => elem.status == true)}
          renderItem={_renderFavoriteItem}
          ItemSeparatorComponent={() => {
            return (<View style={{ marginVertical: 1 }} />);
          }}
        />
      </View>
    </>
  )
}

export default FavoriteScreen
