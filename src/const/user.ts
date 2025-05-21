import { TopicDisplayMode } from '@/types/topic';
import { UserPreference } from '@/types/user';

export const DEFAULT_PREFERENCE: UserPreference = {
  guide: {
    moveSettingsToAvatar: true,
    topic: true,
  },
  telemetry: !!process.env.DEFAULT_PREFERENCE_TELEMETRY || null,
  topicDisplayMode: TopicDisplayMode.ByTime,
  useCmdEnterToSend: false,
};
