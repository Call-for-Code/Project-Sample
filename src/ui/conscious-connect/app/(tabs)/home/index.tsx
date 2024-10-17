import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, ScrollView, View, Text, Platform, StatusBar, Pressable, Image } from 'react-native';
import { SimpleGrid } from 'react-native-super-grid';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { AppStyle } from '@/styles/AppStyles';
import { CategoryContext } from '@/app/CategoryContext';
import { FooterView } from '@/components/FooterView';

export default function HomeScreen() {
  const router = useRouter();

  const consciousData = useContext(CategoryContext);

  const [dim, setdim] = React.useState(200)

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ justifyContent: 'flex-start' }}>
        <SimpleGrid
          itemDimension={130}
          data={consciousData.categories}
          style={styles.gridView}
          staticDimension={dim}
          spacing={10}
          renderItem={({ item }) => (
            <Pressable
              style={[styles.itemContainer, { backgroundColor: AppStyle.appTheme.backgroundColor }]}
              onPress={() => router.push({ pathname: '/(tabs)/home/category/[id]', params: { id: item.id } })}>
              <FontAwesome5 name={item.icon} size={32} color="white" />
              <Text style={styles.itemName}>{item.name}</Text>
            </Pressable >
          )} listKey={undefined}
        />
      </ScrollView>
     <FooterView/>
    </View>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  
});