import React from 'react';
import { ApiModel } from '@/model/apimodel';

export const ApiData: ApiModel = require('@/data/apimodel.json');
export const CategoryContext = React.createContext<ApiModel>(ApiData);
