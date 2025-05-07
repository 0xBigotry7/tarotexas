import { callGPT } from '../ai/gptService';

interface UserInfo {
  birthdate: string;
  zodiac?: string;
}

interface TarotCardInfo {
  name: string;
  meaning: string;
}

export async function generatePersonalizedInterpretation(userInfo: UserInfo, cards: TarotCardInfo[]): Promise<string> {
  return callGPT({ userInfo, cards });
} 