import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { StyleSheet, View, Text, Platform, StatusBar } from 'react-native';
import { SimpleGrid } from 'react-native-super-grid';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { } from 'react-native';


//export default function SuperGridExample() {
export default function InfoScreen() {
    return (
        <View >
            <Text style={styles.itemName}>This is the information page</Text>
        </View>
    );
}


const styles = StyleSheet.create({
      itemName: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
    },
});