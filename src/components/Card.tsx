import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { ImageBackground } from 'react-native'; 
import { ContentItem } from '../types/content';
import { theme } from '../theme';

export const Card = ({ title, image, url }: Omit<ContentItem, 'id'>) => (
  <TouchableOpacity 
    style={styles.card} 
    onPress={() => Linking.openURL(url)}
    activeOpacity={0.8}
  >
    <ImageBackground source={image} style={styles.cardImage} imageStyle={{ borderRadius: 12 }}>
      <View style={styles.textOverlay}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { borderRadius: 12, marginBottom: 15, height: 150,overflow: 'hidden',backgroundColor: theme.colors.surface, },
  cardImage: { width: '100%', height: '100%',justifyContent: 'flex-end', },
  textOverlay: { padding: 6, },
  cardTitle: { color: 'white', fontSize: 13, fontWeight: 'bold', },
});