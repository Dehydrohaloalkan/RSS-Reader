import React from 'react'
import { FeedItem } from 'react-native-rss-parser';
import { useNavigation } from '@react-navigation/native'
import { ViewToken, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

type Props = {
    viewableItems: Animated.SharedValue<ViewToken[]>;
    item: FeedItem;
};

const ListItem = (props: Props) => {
    const navigation = useNavigation();

    const rStyle = useAnimatedStyle(() => {
        const isVisible = Boolean(
            props.viewableItems.value
                .filter((item) => item.isViewable)
                .find((viewableItem) => viewableItem.item.id === props.item.id)
        );

        return {
            opacity: withTiming(isVisible ? 1 : 0),
            transform: [
                {
                    scale: withTiming(isVisible ? 1 : 0.6),
                },
            ],
        };
    }, []);

    return (
        <Animated.View style={rStyle}>
            <TouchableOpacity
                style={styles.container}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('OpenNews', { item: props.item })}
            >
                <Text style={styles.title}>{props.item.title}</Text>
            </TouchableOpacity>
        </Animated.View>
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
        marginRight: 10,
        marginBottom: 10,
    },
    content: {
        fontSize: 15,
        width: '100%',
    }
});

export default ListItem