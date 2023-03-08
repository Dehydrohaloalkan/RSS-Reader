import { FeedItem } from 'react-native-rss-parser'
import { useSharedValue } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View, ViewToken } from 'react-native'

import { getNews } from '../services/NewsService'
import { useFetching } from '../hooks/useFetching'
import ListItem from '../components/ListItem'
import RssChangeButton from '../components/RssChangeButton'
import RssData from '../services/RssData';
import RssChangeModal from '../components/RssChangeModal';

type Props = {}

const HomeScreen = (props: Props) => {
    const navigation = useNavigation();
    const [data, setData] = useState<FeedItem[]>([]);
    const [rssChangeVisible, setRssChangeVisible] = useState(false);
    const [rss, setRss] = useState(RssData[0]);

    const [fetchNews, isLoading, error] = useFetching(async () => {
        const rssFeed = await getNews(rss);
        const title = rssFeed.title;
        navigation.setOptions({
            title: title,
        })
        const items = rssFeed.items;
        setData(items);
    })

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <RssChangeButton onPress={() => setRssChangeVisible(true)} />
            ),
            title: 'Loading...'
        })
        fetchNews();
    }, [rss])

    return (
        <View style={styles.container}>
            {isLoading
                ? <View style={styles.indicator}>
                    <ActivityIndicator size={'large'} color={'#000000'} />
                </View>
                : <FlatList
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchNews} />}
                    data={data}
                    renderItem={({ item }) => {
                        return <ListItem item={item} />;
                    }}
                />}
            <RssChangeModal
                visible={rssChangeVisible}
                setVisible={setRssChangeVisible}
                setRss={setRss} />
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
