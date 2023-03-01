import { FeedItem } from 'react-native-rss-parser'
import { useSharedValue } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View, ViewToken } from 'react-native'

import { getNews } from '../services/NewsService'
import { useFetching } from '../hooks/useFetching'
import ListItem from '../components/ListItem'

type Props = {}

const HomeScreen = (props: Props) => {
    const navigation = useNavigation();
    const viewableItems = useSharedValue<ViewToken[]>([]);
    const [data, setData] = useState<FeedItem[]>([]);
    
    const [fetchNews, isLoading, error] = useFetching(async () => {
        const rss = await getNews();
        const title = rss.title;
        navigation.setOptions({
            title: title,
        })
        const items = rss.items;
        setData(items);
    })

    useEffect(() => {
        fetchNews();
    }, [])

    const onViewableItemsChanged = useCallback(
        (ViewableItemsChangedInfo: any) => {
            viewableItems.value = ViewableItemsChangedInfo.viewableItems;
        },
        []
    );

    return (
        <View style={styles.container}>
            {isLoading
                ? <View style={styles.indicator}>
                    <ActivityIndicator size={'large'} color={'#000000'}/>
                </View>
                : <FlatList
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchNews} />}
                    data={data}
                    onViewableItemsChanged={onViewableItemsChanged}
                    renderItem={({ item }) => {
                        return <ListItem item={item} viewableItems={viewableItems} />;
                    }}
                />}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
    }
});
