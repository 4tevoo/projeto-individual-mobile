import { useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image, Animated, Easing } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme';
import Novidades from '../screens/Home/Novidades';
import Login from '../screens/Perfil/Login';
import Atividades from '../screens/Atividades/Atividades';
import Equipamentos from '../screens/Equipamentos/Equipamentos';
import Social from '../screens/Social/Social';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const animations = {
    Atividades: useRef(new Animated.Value(0)).current,
    Equipamentos: useRef(new Animated.Value(0)).current,
    Novidades: useRef(new Animated.Value(1)).current,
    Social: useRef(new Animated.Value(0)).current,
    Perfil: useRef(new Animated.Value(0)).current,
  };

  const animateTab = (name: string) => {
    Object.keys(animations).forEach((key) => {
      Animated.timing(animations[key as keyof typeof animations], {
        toValue: key === name ? 1 : 0,
        duration: 300,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    });
  };
  return (
    <>
      <StatusBar style='auto'/>
      <NavigationContainer>
        <Tab.Navigator
          screenListeners={({ route }) => ({
            tabPress: () => animateTab(route.name),
          })}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: theme.colors.accent,
            tabBarInactiveTintColor: theme.colors.textSecondary,
            tabBarStyle: {
              backgroundColor: theme.colors.surface,
              borderTopWidth: 0,
              elevation: 0,
            },
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
            },
            tabBarIcon: ({ color }) => {
              let iconSource;
              if (route.name === 'Atividades') iconSource = require('../../src/assets/icons/atividades-icon.png');
              else if (route.name === 'Equipamentos') iconSource = require('../../src/assets/icons/equipamentos-icon.png');
              else if (route.name === 'Novidades') iconSource = require('../../src/assets/icons/novidades-icon.png');
              else if (route.name === 'Social') iconSource = require('../../src/assets/icons/social-icon.png');
              else if (route.name === 'Perfil') iconSource = require('../../src/assets/icons/perfil-icon.png');

              const anim = animations[route.name as keyof typeof animations];
              const width = anim.interpolate({ inputRange: [0, 1], outputRange: [40, 65] });
              const bgColor = anim.interpolate({
                inputRange: [0, 1],
                outputRange: ['transparent', theme.colors.borderSelected]
              });


              return (
                <Animated.View style={{ width: width, backgroundColor: bgColor, height: 30, borderRadius: 15, justifyContent: 'center', alignItems: 'center', }}>
                  <Image source={iconSource} style={{ width: 24, height: 24, tintColor: color }} />
                </Animated.View>
              );
            },
          })}
        >
          <Tab.Screen name="Atividades" component={Atividades} />
          <Tab.Screen name="Equipamentos" component={Equipamentos} />
          <Tab.Screen name="Novidades" component={Novidades} />
          <Tab.Screen name="Social" component={Social} />
          <Tab.Screen name="Perfil" component={Login} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
