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
            title: props.route.params.item.title.trim(),
        })
    }, []);

    console.log(props.route.params.item);
    
    return (
        <WebView source={{ uri: props.route.params.item.links[0].url }}/>
    )
}

export default OpenNewsScreen