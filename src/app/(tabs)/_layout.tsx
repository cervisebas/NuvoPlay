import {
  createNativeBottomTabNavigator,
  createNativeBottomTabScreen,
} from '@react-navigation/bottom-tabs/unstable';
import LibraryScreen from './library';
import SettingsScreen from './settings';
import YouScreen from './you';
import { createStaticNavigation } from '@react-navigation/native';
import { tabBarIcon } from '@/shared/utils/tabBarIcon';

const MyTabs = createNativeBottomTabNavigator({
  initialRouteName: 'Library',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    You: createNativeBottomTabScreen({
      screen: YouScreen,
      options: {
        title: 'Para ti',
        tabBarIcon: tabBarIcon('face-man-outline', 'face-man'),
      },
    }),
    Library: createNativeBottomTabScreen({
      screen: LibraryScreen,
      options: {
        title: 'Canciones',
        tabBarIcon: tabBarIcon('music-circle-outline', 'music-circle'),
      },
    }),
    Settings: createNativeBottomTabScreen({
      screen: SettingsScreen,
      options: {
        title: 'Configuración',
        tabBarIcon: tabBarIcon('cog-outline', 'cog'),
      },
    }),
  },
});

const MyTabsNavigation = createStaticNavigation(MyTabs);

export default function TabLayout() {
  return <MyTabsNavigation />;
}
