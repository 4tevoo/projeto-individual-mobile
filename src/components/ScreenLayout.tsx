import { StyleSheet, View, ViewProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';

export const ScreenLayout = ({ children, style }: ViewProps) => (
  <LinearGradient colors={theme.colors.backgroundGradient} style={styles.container}>
    <View style={[styles.content, style]}>
      {children}
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: { flex: 1 }, 
  content: { 
    flex: 1,
  }
});