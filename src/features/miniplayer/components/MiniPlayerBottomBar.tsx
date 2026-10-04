import React, { useEffect } from 'react';
import { useMiniPlayer } from '../providers/MiniPlayerProvider';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

interface MiniPlayerBottomBarProps {
  children: React.ReactNode;
}

export function MiniPlayerBottomBar(props: MiniPlayerBottomBarProps) {
  const { setBottomBarHeight } = useMiniPlayer();
  const tabBarHeight = useBottomTabBarHeight();

  useEffect(() => {
    setBottomBarHeight(tabBarHeight);
  }, [tabBarHeight]);

  return props.children;
}
