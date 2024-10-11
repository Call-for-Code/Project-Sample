import React from "react";
import { Stack, useRouter } from "expo-router";
import { AppStyle } from '@/styles/AppStyles';

export default function StackLayout() {
  const router = useRouter();

  return (
    <Stack
        screenOptions={{        
            headerShown: true,
            headerStyle: {
            backgroundColor: AppStyle.appTheme.backgroundColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          //fontWeight: 'bold',
          //fontStyle: 'italic',
          //fontFamily: 'Times New Roman',
        },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Select a category",
          statusBarColor: AppStyle.appTheme.backgroundColor,
        }}
      />
    </Stack>
  );
}