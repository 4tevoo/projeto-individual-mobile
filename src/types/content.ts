import { ImageSourcePropType } from 'react-native';

export interface BaseItem {
  id: string;
  title: string;
  image: ImageSourcePropType;
}

export interface ContentItem extends BaseItem {
  url: string;
}

export interface AtividadeItem extends BaseItem {}

export interface MenuItem extends BaseItem {
  onPress?: () => void;
}