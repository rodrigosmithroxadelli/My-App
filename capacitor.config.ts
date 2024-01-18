import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'Meu.app',
  appName: 'my-app',
  webDir: 'dist/my-app/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
