import { View } from 'react-native';
import { NativeTabs } from 'expo-router/native-tabs';

export default function LibraryPage() {
  return (
    <View className={'flex-1 bg-background'}>
      <NativeTabs.Trigger>
        <NativeTabs.Trigger.Label>Canciones</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </View>
  );
}
