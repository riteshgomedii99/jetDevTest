import { ListLoaderAtom } from '@app/shared';
import { RootState } from '@app/store';
import { addUserData, deleteUnFavorite, resetUserData, userFavorite, userUnFavorite } from '@app/store/actions/slice.action';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Text, View, VirtualizedList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import TabScreenHeader from '../TabScreenHeader'
import UserCard from './components/UserCard';

const HomeScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const onEndReachedCalledDuringMomentum = useRef(true)
  const { userDataList } = useSelector((state: RootState) => state)
  var pagNo = 10
  const isFocus = useIsFocused()
  const dispatch = useDispatch()
  const url = `https://randomuser.me/api/?results=${pagNo}`

  useEffect(() => {
    handleFetch(false)
  }, [isFocus])
  const handleFetch = (scroll = false,) => {
    fetch(url)
      .then(response => response.json())
      .then((res: any) => {
        const statusValue = res?.results.map((elem: any) => ({ ...elem, status: false }))
        dispatch(addUserData(statusValue))
        setIsRefreshing(false)
      })
      .catch(error => console.error('Error', error));
  };
 
  const favClickAction = (item: any) => {
    const findValue: any = userDataList?.userData.find((elem: any) => elem.name.first == item.name.first)
    if (findValue.status) {
      dispatch(userUnFavorite(item?.login?.username))
    } else {
      dispatch(userFavorite(item?.login?.username))
    }
  }

//list refresh handeler
  const onRefresh = () => {
    handleFetch(false)
  }

  const onEndReached = ({ distanceFromEnd }: any) => {
    setIsRefreshing(true)
    handleFetch(true)

  }
  const getItem = (data: any, index: number) => data[index];
  const getItemCount = (data: any[]) => data?.length;
  const _renderItem = ({ item }: { item: any }) => {
    return (
      <UserCard key={item?.id?.name} item={item} favoriteClick={() => favClickAction(item)} />
    )
  }

  return (
    <>
      <TabScreenHeader />
      <View style={{ flex: 1 }}>
        <VirtualizedList
          data={userDataList?.userData}
          extraData={userDataList?.userData}
          renderItem={_renderItem}
          getItemCount={getItemCount}
          getItem={getItem}
          onRefresh={onRefresh}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.8}
          keyExtractor={(item, index) => `${item?.id?.name}_${index}`}
          refreshing={false}
          ListFooterComponent={<ListLoaderAtom show={true} />}
          onMomentumScrollBegin={() => { onEndReachedCalledDuringMomentum.current = false }}
        />
      </View>
    </>
  )
}

export default HomeScreen
