import { NavigationIndependentTree } from '@react-navigation/native';
import TabLayout from '../(tabs)/_layout';

export function BottomTabScreen() {
  return (
    <NavigationIndependentTree>
      <TabLayout />
    </NavigationIndependentTree>
  );
}
