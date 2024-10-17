import { ApiModel } from '@/model/apimodel';
import React, { useState } from 'react';
import { ApiData, CategoryContext } from '@/app/CategoryContext';
import { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
}
const CategoryProvider = ({ children }: Props) => {

  const [categories, setCategories] = useState(ApiData);

  return (
    <CategoryContext.Provider value= {categories} >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;