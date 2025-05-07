interface ShareCard {
  name: string;
  image: string;
  interpretation: string;
}

interface ShareContent {
  image: string;
  text: string;
}

export function generateShareContent(card: ShareCard): ShareContent {
  return {
    image: card.image,
    text: `${card.name}: ${card.interpretation}`,
  };
}

export async function shareToPlatform(content: ShareContent, platform: string): Promise<boolean> {
  // mock分享API，实际应调用原生或第三方SDK
  return Promise.resolve(true);
} 