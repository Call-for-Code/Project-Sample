import React, { useContext } from 'react';
import { StyleSheet, View, ScrollView, Text, Platform, StatusBar } from 'react-native';
import { CategoryContext } from '@/app/CategoryContext';
import { } from 'react-native';
import { Stack, useGlobalSearchParams } from "expo-router";
import Markdown  from 'react-native-markdown-display'



export default function CategoryScreen() {
    const { id, detailId } = useGlobalSearchParams();

    const conciousData = useContext(CategoryContext);

    const category = conciousData.categories.find((catId) => catId.id === id)

    const detail = category?.items.find((item) => item.id === detailId)
    return (
        <View>
            <ScrollView contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.itemContainer}>
                <Stack.Screen options={{ headerTitle: `Category: ${category?.name} ` }} />
                <Text style={styles.itemName}>About {detail?.name}:</Text>
                {/* <Text style={styles.itemContainer}>{detail?.description}</Text> */}
                <Markdown>{detail?.description}</Markdown>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    itemName: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',//'600',
        //padding: 5,
    },
    itemContainer: {
        //flexWrap :'nowrap',
        padding: 10,
        justifyContent: 'space-evenly',
    }
});