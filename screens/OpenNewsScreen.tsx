import { View } from 'react-native'
import React, { useEffect } from 'react'
import WebView from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

type Props = {
    route: any;
}

const OpenNewsScreen = (props: Props) => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: props.route.params.item.title,
        })
    }, []);
    
    return (
        <WebView source={{ uri: props.route.params.item.id }}/>
    )
}

export default OpenNewsScreen