import {
  createNativeStackNavigator,
  createNativeStackScreen,
} from '@react-navigation/native-stack';
import { BottomTabScreen } from './(stack)/BottomTabScreen';
import { createStaticNavigation } from '@react-navigation/native';

const MyStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    TabNavigation: createNativeStackScreen({
      screen: BottomTabScreen,
    }),
  },
});

const MyStackNavigation = createStaticNavigation(MyStack);

export default function RootLayout() {
  return <MyStackNavigation />;
}
