import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  const tabScreens = [
    {
      name: "index",
      title: "Home",
      icon: "home-mini",
      iconType: MaterialIcons,
    },
    {
      name: "explore",
      title: "Explore",
      icon: "explore",
      iconType: MaterialIcons,
    },
    {
      name: "search",
      title: "Search",
      icon: "search1",
      iconType: AntDesign,
    },
    {
      name: "hot",
      title: "New",
      icon: "whatshot",
      iconType: MaterialIcons,
    },
  ];

  return (
    <Tabs
      screenOptions={{
        freezeOnBlur: true,
        tabBarAllowFontScaling: true,
        transitionSpec:{
          animation:'spring',
          config:{
            stiffness: 500,
            damping: 300,
            mass: 1,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
          }
        },
        tabBarActiveTintColor: "#fdcb6e", 
        tabBarInactiveTintColor: "#2d3436", 
        animation:'shift',
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            height: 70,
            backgroundColor: '#fff',
            position: 'absolute',
            paddingBottom: 10,
            elevation: 5,
          },
          android: {
            height: 70,
            backgroundColor: '#fff',
            position: 'absolute',
            paddingBottom: 10,
            elevation: 5,
          },
        }),
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
          fontWeight:500,
        },
        tabBarItemStyle: {
          paddingVertical: 4, // Adjust vertical padding
        },
      }}
    >
      {tabScreens.map((tab, index) => (
        <Tabs.Screen
          key={index}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => (
              <tab.iconType name={tab.icon} size={30} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
