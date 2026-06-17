import { ScrollView, StyleSheet } from 'react-native';
import { ScreenLayout } from '../../components/ScreenLayout';
import { MenuButton } from '../../components/MenuButton';
import { atividadesData } from '../../data/contentData';

export default function Atividades() {
  return (
    <ScreenLayout style={styles.layout}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {atividadesData.map((item) => (
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