import { TouchableOpacity, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface SocialButtonProps {
  label: string;
  color: string;
  icon: ImageSourcePropType;
  artigo: string
  onPress: () => void;
}

export const SocialButton = ({ label, color, icon, onPress, artigo }: SocialButtonProps) => (
  <TouchableOpacity 
    style={[styles.button, { backgroundColor: color }]} 
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Image source={icon} style={styles.icon} />
    <Text style={styles.text}>Conectar-se com {artigo} {label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 7,
  },
  icon: { width: 24, height: 24, marginRight: 15 },
  text: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});