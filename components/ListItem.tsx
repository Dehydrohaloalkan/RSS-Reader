import React from 'react'
import { FeedItem } from 'react-native-rss-parser';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

type Props = {
    item: FeedItem;
};

const ListItem = (props: Props) => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                activeOpacity={0.7}
                onPress={() => {
                    navigation.navigate('OpenNews', { item: props.item });
                }}
            >
                <Text style={styles.title}>{props.item.title.trim()}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 8,
        borderRadius: 10,
        elevation: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 15,
        width: '100%',
    }
});

export default ListItem