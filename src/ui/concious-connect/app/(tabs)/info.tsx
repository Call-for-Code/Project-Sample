import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet, View, Text, Platform, StatusBar } from 'react-native';
import { AppStyle } from '@/styles/AppStyles';
import { ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-display';

import info from '@/data/info.json'
import { FooterView } from '@/components/FooterView';

//export default function SuperGridExample() {
export default function InfoScreen() {

    return (
        <ScrollView contentContainerStyle={styles.itemContainer}>
            <Markdown style={{
                heading1: { fontSize: 18, fontWeight: '500' },
                body: { fontSize: 16, fontWeight: '500' }
            }}>
                {info.infoText}
            </Markdown>
            <FooterView />
        </ScrollView>


    );
}


const styles = StyleSheet.create({
    itemName: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
    },
    itemContainer: {
        //justifyContent: 'flex-start',
        //alignContent: 'center',
        borderRadius: 5,
        padding: 10,
    },
});