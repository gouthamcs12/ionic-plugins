import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: '../../dist/apps/my-app',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.4:4200',
    cleartext: true
  }
};

export default config;
