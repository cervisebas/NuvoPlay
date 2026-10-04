import useSafeArea from '@/shared/hooks/useSafeArea';
import { View } from 'react-native';
import { useMiniPlayer } from './providers/MiniPlayerProvider';
import { useTheme } from 'react-native-paper';

export function MiniPlayer() {
  const theme = useTheme();
  const { bottom } = useSafeArea();
  const { bottomBarHeight } = useMiniPlayer();

  return (
    <View
      className={'absolute left-0 h-18 w-full rounded-t-2xl'}
      style={{
        bottom: bottomBarHeight + bottom,
        backgroundColor: theme.colors.elevation.level3,
      }}
    >
      <></>
    </View>
  );
}
