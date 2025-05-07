import { callGPT } from '../ai/gptService';

interface TarotCardInfo {
  name: string;
  meaning: string;
}

export async function generateMultiCardInterpretation(cards: TarotCardInfo[]): Promise<string> {
  return callGPT({ cards });
} 