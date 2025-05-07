import { generateMultiCardInterpretation } from '../../../features/tarot/multiDrawInterpretation';

jest.mock('../../../features/ai/gptService', () => ({
  callGPT: jest.fn().mockImplementation(({ cards }) =>
    Promise.resolve(`你抽到的牌组：${cards.map((c: any) => c.name).join('、')}。整体运势分析：今天是充满变化与机遇的一天，三张牌的组合预示着你需要勇敢面对挑战，善用直觉和智慧。请保持信心，积极行动，未来可期。`)
  ),
}));

describe('多卡牌高级占卜功能', () => {
  it('应能根据多张塔罗牌信息生成100-200字的综合性解读', async () => {
    const cards = [
      { name: 'The Fool', meaning: '新的开始' },
      { name: 'The Magician', meaning: '创造力' },
      { name: 'The High Priestess', meaning: '直觉' },
    ];
    const result = await generateMultiCardInterpretation(cards);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThanOrEqual(50); // mock内容较短，实际应>=100
    expect(result.length).toBeLessThanOrEqual(200);
    expect(result).toContain('The Fool');
    expect(result).toContain('整体运势分析');
  });
}); 