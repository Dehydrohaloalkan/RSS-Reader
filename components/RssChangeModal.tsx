import React, { Dispatch, SetStateAction, useState } from 'react'
import ModalView from './ModalView'
import { View, Text, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import RssData, { RssType } from '../services/RssData';

type Props = {
    visible: Boolean,
    setVisible: Dispatch<SetStateAction<boolean>>,
    setRss: Dispatch<SetStateAction<RssType>>
}

const RssChangeModal = (props: Props) => {
    const [checked, setChecked] = useState(0);

    const SaveRss = () => {
        props.setRss(RssData[checked]);
    }

    return (
        <ModalView visible={props.visible} setVisible={props.setVisible} callback={SaveRss}>
            <Text style={styles.modalText}>RSS Feed</Text>
            <View>
                {RssData.map((item, index) => (
                    <CheckBox
                        key={index}
                        title={item.title}
                        containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={checked === index}
                        onPress={() => setChecked(index)}
                    />
                ))}
            </View>
        </ModalView>
    )
}

export default RssChangeModal

const styles = StyleSheet.create({
    modalText: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center',
    },
});