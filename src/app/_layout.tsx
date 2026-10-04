import {
  createNativeStackNavigator,
  createNativeStackScreen,
} from '@react-navigation/native-stack';
import { BottomTabScreen } from './(stack)/BottomTabScreen';
import { createStaticNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { MiniPlayer } from '@/features/miniplayer';

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
  return (
    <View className={'flex-1 relative'}>
      <MyStackNavigation />

      <MiniPlayer />
    </View>
  );
}
