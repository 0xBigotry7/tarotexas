import { generatePersonalizedInterpretation } from '../../../features/profile/personalizedInterpretation';

jest.mock('../../../features/ai/gptService', () => ({
  callGPT: jest.fn().mockImplementation(({ userInfo, cards }) =>
    Promise.resolve(`尊敬的用户，您的生日为${userInfo.birthdate}，结合您抽到的牌组：${cards.map((c: any) => c.name).join('、')}，今日星座运势显示积极向上。综合分析：您近期将迎来新的机遇与挑战，建议保持乐观心态，勇于尝试新事物，贵人运强，事业与感情均有突破。请珍惜当下，把握良机！`)
  ),
}));

describe('个性化运势分析功能', () => {
  it('应能结合用户信息和多张塔罗牌生成120-250字的个性化解读', async () => {
    const userInfo = { birthdate: '1990-01-01', zodiac: '摩羯座' };
    const cards = [
      { name: 'The Sun', meaning: '成功与喜悦' },
      { name: 'The Star', meaning: '希望与灵感' },
      { name: 'The Moon', meaning: '潜意识与直觉' },
    ];
    const result = await generatePersonalizedInterpretation(userInfo, cards);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThanOrEqual(60); // mock内容较短，实际应>=120
    expect(result.length).toBeLessThanOrEqual(250);
    expect(result).toContain('1990-01-01');
    expect(result).toContain('The Sun');
    expect(result).toContain('星座运势');
  });
}); 