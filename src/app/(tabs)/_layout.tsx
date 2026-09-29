import { NativeTabs } from 'expo-router/native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name={'you'}>
        <NativeTabs.Trigger.Label>Perfil</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md={'person'} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name={'library'}>
        <NativeTabs.Trigger.Label>Canciones</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md={'music_note'} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name={'settings'}>
        <NativeTabs.Trigger.Label>Ajustes</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md={'settings'} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
