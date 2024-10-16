import React, { useContext } from 'react';
import { StyleSheet, ScrollView, Text, PixelRatio, Platform, Dimensions } from 'react-native';
import { CategoryContext } from '@/app/CategoryContext';
import { } from 'react-native';
import { Stack, useGlobalSearchParams } from "expo-router";
import Markdown from 'react-native-markdown-display'
import { FooterView } from '@/components/FooterView';


export default function CategoryScreen() {
    const { id, detailId } = useGlobalSearchParams();

    const conciousData = useContext(CategoryContext);

    const category = conciousData.categories.find((catId) => catId.id === id)

    const detail = category?.items.find((item) => item.id === detailId)
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.itemContainer}
        >
            <Stack.Screen options={{ headerTitle: `Category: ${category?.name} ` }} />
            <Text style={styles.itemName}>About {detail?.name}:</Text>
            <Markdown style={{
                body: { fontSize: 16, fontWeight: '500' },
            }}>{detail?.description}</Markdown>
            <FooterView/>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    itemName: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',//'600',
    },
    itemContainer: {
        flexWrap: 'nowrap',
        padding: 10,
        justifyContent: 'space-evenly',
    },
});