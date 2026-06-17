import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { theme } from '../../theme';
import { novidadesData, comunidadeData } from '../../data/contentData';
import { Card } from '../../components/Card';
import { ScreenLayout } from '../../components/ScreenLayout';

export default function Novidades() {
  const [subTab, setSubTab] = useState(0);
  const { width } = useWindowDimensions();
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  const handlePress = (index: number) => {
    setSubTab(index);
    offset.value = withTiming(index * (width / 2), { duration: 250 });
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={[]}>
      <ScreenLayout style={{ padding: 0 }}>
        <View style={styles.subHeader}>
          <TouchableOpacity style={styles.tabButton} onPress={() => handlePress(0)}>
            <Text style={subTab === 0 ? styles.activeText : styles.inactiveText}>Novidades</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton} onPress={() => handlePress(1)}>
            <Text style={subTab === 1 ? styles.activeText : styles.inactiveText}>Comunidade</Text>
          </TouchableOpacity>

          <Animated.View style={[styles.indicatorContainer, animatedStyle]}>
            <View style={[styles.activeIndicator, { width: subTab === 0 ? 67 : 80 }]} />
          </Animated.View>
        </View>
        <FlatList
          data={subTab === 0 ? novidadesData : comunidadeData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card title={item.title} image={item.image} url={item.url} />
          )}
          contentContainerStyle={styles.content}
        />
      </ScreenLayout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1 
  },
  
  subHeader: {
    flexDirection: 'row',
    backgroundColor: theme.colors.surface,
    height: 90,
    borderBottomWidth: 1,
    borderColor: theme.colors.borderSelected,
    paddingTop: 40
  },

  tabButton: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  indicatorContainer: {
    position: 'absolute',
    bottom: 0,
    width: '50%',
    alignItems: 'center',
  },

  activeIndicator: {
    height: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: theme.colors.accent
  },

  activeText: { 
    color: theme.colors.accent 
  },

  inactiveText: { 
    color: theme.colors.textSecondary 
  },

  content: { 
    padding: 15 
  }
});