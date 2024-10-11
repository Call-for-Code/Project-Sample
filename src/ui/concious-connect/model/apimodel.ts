export interface ApiModel {
  version: string
  generatedAt: string
  categories: Category[]
}

export interface Category {
  id: string
  name: string
  icon: string
  items: Item[]
}

export interface Item {
  id: string
  name: string
  description: string
}
