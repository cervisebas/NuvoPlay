import '@/global.css';
import RootLayout from './app/_layout';
import { MiniPlayerProvider } from './features/miniplayer/providers/MiniPlayerProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

export function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <MiniPlayerProvider>
          <RootLayout />
        </MiniPlayerProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
