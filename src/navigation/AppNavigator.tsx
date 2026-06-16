import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const DummyScreen = ({ route }: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Tela: {route.name}</Text>
  </View>
);

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Atividades" component={DummyScreen} />
        <Tab.Screen name="Equipamentos" component={DummyScreen} />
        <Tab.Screen name="Novidades" component={DummyScreen} />
        <Tab.Screen name="Social" component={DummyScreen} />
        <Tab.Screen name="Perfil" component={DummyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}