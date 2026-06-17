import { ImageSourcePropType } from 'react-native';

export interface ContentItem {
  id: string;
  title: string;
  image: ImageSourcePropType;
  url: string;
}