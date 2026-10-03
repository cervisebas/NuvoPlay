import { ConfigContext, ExpoConfig } from 'expo/config';

const VERSION_APP = '1.0.0';
const VERSION_CODE_IOS = 1;
const VERSION_CODE_ANDROID = 1;
const PACKAGE_NAME = 'com.nuvoplay';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'NuvoPlay',
  slug: 'NuvoPlay',
  version: VERSION_APP,
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'nuvoplay',
  userInterfaceStyle: 'automatic',
  ios: {
    buildNumber: String(VERSION_CODE_IOS),
    bundleIdentifier: PACKAGE_NAME,
    icon: './assets/expo.icon',
  },
  android: {
    package: PACKAGE_NAME,
    versionCode: VERSION_CODE_ANDROID,
    adaptiveIcon: {
      backgroundColor: '#E6F4FE',
      foregroundImage: './assets/images/android-icon-foreground.png',
      backgroundImage: './assets/images/android-icon-background.png',
      monochromeImage: './assets/images/android-icon-monochrome.png',
    },
    predictiveBackGestureEnabled: true,
  },
  plugins: [
    'expo-image',
    'expo-status-bar',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#208AEF',
        image: './assets/images/splash-icon.png',
        imageWidth: 76,
      },
    ],
    '@react-native-vector-icons/material-design-icons',
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
});
