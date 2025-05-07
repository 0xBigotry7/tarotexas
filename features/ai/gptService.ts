export async function callGPT(
  params:
    | { cardName: string; meaning: string }
    | { cards: { name: string; meaning: string }[] }
    | { userInfo: { birthdate: string; zodiac?: string }; cards: { name: string; meaning: string }[] }
): Promise<string> {
  if ('userInfo' in params && 'cards' in params) {
    // 个性化运势分析
    const { userInfo, cards } = params;
    return Promise.resolve(`尊敬的用户，您的生日为${userInfo.birthdate}，结合您抽到的牌组：${cards.map((c) => c.name).join('、')}，今日星座运势显示积极向上。综合分析：您近期将迎来新的机遇与挑战，建议保持乐观心态，勇于尝试新事物，贵人运强，事业与感情均有突破。请珍惜当下，把握良机！`);
  } else if ('cards' in params) {
    // 多卡牌解读
    const cards = params.cards;
    return Promise.resolve(`你抽到的牌组：${cards.map((c) => c.name).join('、')}。整体运势分析：今天是充满变化与机遇的一天，三张牌的组合预示着你需要勇敢面对挑战，善用直觉和智慧。请保持信心，积极行动，未来可期。`);
  } else {
    // 单张牌解读
    return Promise.resolve(`${params.cardName}：今天你的运势充满希望！${params.meaning}，请保持积极心态，勇敢迈出下一步。`);
  }
} 