import { StyleSheet } from 'react-native';
import { ScreenLayout } from '../../components/ScreenLayout';


export default function Equipamentos() {
  return (
    <ScreenLayout style={styles.layout}>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  layout: {
    padding: 15,
    marginTop: 40
  }
});