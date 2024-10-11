import { ThemedView } from '@/components/ThemedView';
import React, { useContext } from 'react';
import { StyleSheet, View, Text, Platform, StatusBar, Pressable } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { FlatList, TouchableHighlight } from 'react-native';
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { CategoryContext } from '@/app/CategoryContext';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';
import { AppStyle } from '@/styles/AppStyles';


//export default function SuperGridExample() {
export default function CategoryScreen() {

    const router = useRouter();

    const { id } = useGlobalSearchParams<{id:string}>();

    const conciousData = useContext(CategoryContext);

    const category = conciousData.categories.find((catId) => catId.id === id)

    return (
        <View >
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
                        //r={separators.highlight}
                        //onHideUnderlay={separators.unhighlight}
                        >
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flexWrap: 'nowrap',
        flexDirection: 'column',
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
        // borderColor: '#000',
        // borderWidth: 1,
        backgroundColor: '#eee',
        paddingLeft: 10,
        paddingTop: 10,
    },
    itemName: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
        //borderColor: '#000',
        //borderWidth: 1,
        //backgroundColor: '#aeaeae',
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