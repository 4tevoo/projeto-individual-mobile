import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { MenuItem } from '../types/content';

interface MenuButtonProps extends Omit<MenuItem, 'id'> {
  onPress: () => void;
}

export const MenuButton = ({ title, image, onPress }: MenuButtonProps) => (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
    <Image source={image} style={styles.icon} />
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.surface,
    width: '100%',
    height: 60,
    borderRadius: 8,
    flexDirection: 'row', 
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10, 
  },
  icon: { width: 38, height: 38, tintColor: theme.colors.accent, marginRight: 20 },
  text: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});