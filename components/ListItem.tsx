import React from 'react'
import { FeedItem } from 'react-native-rss-parser';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { Image } from 'react-native-elements';

type Props = {
    item: FeedItem;
};

const ListItem = (props: Props) => {
    const navigation = useNavigation();

    console.log(props.item);

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                activeOpacity={0.7}
                onPress={() => {
                    navigation.navigate('OpenNews', { item: props.item });
                }}
            >
                {props.item.enclosures.length 
                ? <View style={styles.view}>
                    <Image source={{uri: props.item.enclosures[0].url}} style={styles.image}></Image>
                    <Text style={[styles.title, styles.titleImage]}>{props.item.title.trim()}</Text>
                </View>
                : <Text style={styles.title}>{props.item.title.trim()}</Text>}
                
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
    titleImage: {
        marginRight: 150
    },
    content: {
        fontSize: 15,
        width: '100%',
    },
    view: {
        flexDirection: 'row'
    },
    image: {
        height: 150,
        width: 150,
        marginRight: 10,
        marginTop: 5
        
    }
});

export default ListItem