import { MiniPlayerBottomBar } from '@/features/miniplayer/components/MiniPlayerBottomBar';
import { ScrollView, Text } from 'react-native';

const ITEMS = Array(100)
  .fill(1)
  .map((_, i) => i + 1);

export default function LibraryScreen() {
  return (
    <MiniPlayerBottomBar>
      <ScrollView className={'flex-1'}>
        {ITEMS.map((v) => (
          <Text key={v} className={'text-black text-base'}>
            Item {v}
          </Text>
        ))}
      </ScrollView>
    </MiniPlayerBottomBar>
  );
}
