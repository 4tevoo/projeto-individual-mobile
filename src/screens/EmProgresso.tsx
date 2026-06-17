import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';

export const EmProgresso = ({ title }: { title: string }) => (
  <LinearGradient colors={theme.colors.backgroundGradient} style={styles.container}>
    <Text style={styles.text}>{title} - Work in Progress...</Text>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});