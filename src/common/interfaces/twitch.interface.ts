export interface TwitchExtensionAuthResponse {
  channelId: string;
  clientId: string;
  helixToken: string;
  token: string;
  userId: string;
}

/*
 * Twitch provides various information via URL parameters.
 * If you need them, the interfaces and type below describe them.
 *
 * @see https://dev.twitch.tv/docs/extensions/reference/#client-query-parameters
 */
interface TwitchUrlSearchParamsBase {
  language: string;
  locale: string;
  mode: 'config' | 'dashboard' | 'viewer';
  popout: boolean;
  state: 'approved' | 'hosted_test' | 'in_review' | 'pending_action' | 'ready_for_review' | 'released' | 'testing' | 'uploading';
}

interface WebPlatformParams extends TwitchUrlSearchParamsBase {
  platform: 'web';
  anchor: 'component' | 'panel' | 'video_overlay';
}

interface MobilePlatformParams extends TwitchUrlSearchParamsBase {
  platform: 'mobile';
}

export type TwitchUrlSearchParams = WebPlatformParams | MobilePlatformParams;
