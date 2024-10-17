import React, { useContext } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { FlatList } from 'react-native';
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { CategoryContext } from '@/app/CategoryContext';
import { FooterView } from '@/components/FooterView';

export default function CategoryScreen() {

    const router = useRouter();

    const { id } = useGlobalSearchParams<{id:string}>();

    const consciousData = useContext(CategoryContext);

    const category = consciousData.categories.find((catId) => catId.id === id)

    return (
        <View style={{flex: 1}}>
            <Stack.Screen options={{ headerTitle: `Category: ${category?.name}` }} />
            <Text style={styles.itemHeader}>Select an activity below to learn more</Text>
            <FlatList               
                ItemSeparatorComponent={() => (
                    <View style={styles.itemSeparator} />
                )}                
                style={styles.gridView}
                data={category?.items}
                renderItem={({ item, separators }) => (
                    <Pressable
                        key={item.id}
                        onPress={() => router.push({ pathname: '/(tabs)/home/category/[id]/details', params: { id: id, detailId: item.id } })}
                        >
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                    </Pressable>
                )}
            />
            <FooterView/>
        </View>
    );
}


const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flexWrap: 'nowrap',
        flexDirection: 'column',
    },
    itemContainer: {
        justifyContent: 'flex-end',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#eeeeee',
    },
    itemHeader: {
        fontSize: 18,
        color: '#000',
        fontWeight: '600',
        backgroundColor: '#eee',
        paddingLeft: 10,
        paddingTop: 10,
    },
    itemName: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
        backgroundColor: '#eeeeee',
        height: 50,
        alignContent: 'center',
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    itemSeparator: {
        backgroundColor: '#ddd',
        height: 2,
    },
});