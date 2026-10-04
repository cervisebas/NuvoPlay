import {
  MaterialDesignIcons,
  MaterialDesignIconsIconName,
} from '@react-native-vector-icons/material-design-icons/static';

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

export function tabBarIcon(
  icon: MaterialDesignIconsIconName,
  focusedIcon: MaterialDesignIconsIconName,
) {
  return function (props: TabBarIconProps) {
    if (props.focused) {
      return (
        <MaterialDesignIcons
          name={focusedIcon}
          color={props.color}
          size={props.size}
        />
      );
    }

    return (
      <MaterialDesignIcons name={icon} color={props.color} size={props.size} />
    );
  };
}
