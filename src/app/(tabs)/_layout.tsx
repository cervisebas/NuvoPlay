import {
  createBottomTabNavigator,
  createBottomTabScreen,
} from '@react-navigation/bottom-tabs';
import LibraryScreen from './library';
import SettingsScreen from './settings';
import YouScreen from './you';
import { createStaticNavigation } from '@react-navigation/native';
import { tabBarIcon } from '@/shared/utils/tabBarIcon';
import { BottomBar } from '@/features/bottom-bar';

const MyTabs = createBottomTabNavigator({
  initialRouteName: 'Library',
  screenOptions: {
    headerShown: false,
    animation: 'shift',
  },
  tabBar: (props) => <BottomBar {...props} />,
  screens: {
    You: createBottomTabScreen({
      screen: YouScreen,
      options: {
        title: 'Para ti',
        tabBarIcon: tabBarIcon('face-man-outline', 'face-man'),
      },
    }),
    Library: createBottomTabScreen({
      screen: LibraryScreen,
      options: {
        title: 'Canciones',
        tabBarIcon: tabBarIcon('music-circle-outline', 'music-circle'),
      },
    }),
    Settings: createBottomTabScreen({
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
