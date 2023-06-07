import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.authadmin',
  appName: 'bio-auth-admin',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
