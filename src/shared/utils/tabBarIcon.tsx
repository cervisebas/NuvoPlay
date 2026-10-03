import { NativeBottomTabIcon } from '@react-navigation/bottom-tabs/unstable';
import {
  MaterialDesignIcons,
  MaterialDesignIconsIconName,
} from '@react-native-vector-icons/material-design-icons/static';

interface TabBarIconProps {
  focused: boolean;
}

export function tabBarIcon(
  icon: MaterialDesignIconsIconName,
  focusedIcon: MaterialDesignIconsIconName,
) {
  const _iconImage = MaterialDesignIcons.getImageSourceSync(icon, 24);
  const _focusedIconImage = MaterialDesignIcons.getImageSourceSync(
    focusedIcon,
    24,
  );

  return function (props: TabBarIconProps): NativeBottomTabIcon {
    if (props.focused) {
      return {
        type: 'image' as const,
        source: _focusedIconImage,
      };
    }

    return {
      type: 'image' as const,
      source: _iconImage,
    };
  };
}
