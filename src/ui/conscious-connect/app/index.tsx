import React from "react";
import { Redirect } from "expo-router";
import CategoryProvider from "@/app/CategoryProvider"


export default function StartPage() {

  return (
    <CategoryProvider>
      <Redirect href="/home" />
    </CategoryProvider>);
}