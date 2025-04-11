import { TwitchExtensionAuthResponse } from '@/common/interfaces/twitch.interface';

declare global {
  interface Window {
    Twitch: {
      ext: {
        configuration: {
          broadcaster: {
            content: string;
          };
          onChanged: (callback: () => void) => void;
          set: (segment: 'broadcaster', version: string, content: string) => void;
        };
        onAuthorized: (callback: (auth: TwitchExtensionAuthResponse) => void) => void;
      };
    };
  }
}
