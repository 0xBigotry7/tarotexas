import { callGPT } from './gptService';

interface TarotCardInfo {
  name: string;
  meaning: string;
}

export async function generateInterpretation(card: TarotCardInfo): Promise<string> {
  return callGPT({ cardName: card.name, meaning: card.meaning });
} 