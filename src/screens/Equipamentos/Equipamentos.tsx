import { ScrollView, StyleSheet } from 'react-native';
import { ScreenLayout } from '../../components/ScreenLayout';
import { MenuButton } from '../../components/MenuButton';
import { equipamentosData } from '../../data/contentData';

export default function Equipamentos() {
  return (
    <ScreenLayout style={styles.layout}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {equipamentosData.map((item) => (
          <MenuButton 
            key={item.id}
            title={item.title} 
            image={item.image} 
            onPress={() => console.log(`${item.title} pressionado`)}
          />
        ))}
      </ScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  layout: {
    padding: 15,
    marginTop: 40
  }
});