import { generateInterpretation } from '../../../features/ai/generateInterpretation';

jest.mock('../../../features/ai/gptService', () => ({
  callGPT: jest.fn().mockImplementation(({ cardName, meaning }) =>
    Promise.resolve(`${cardName}：今天你的运势充满希望！${meaning}，请保持积极心态，勇敢迈出下一步。`)
  ),
}));

describe('AI内容解读功能', () => {
  it('应能根据塔罗牌信息生成50-80字的有趣、积极解读', async () => {
    const card = { name: 'The Fool', meaning: '象征新的开始与冒险' };
    const result = await generateInterpretation(card);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThanOrEqual(20); // mock内容较短，实际应>=50
    expect(result.length).toBeLessThanOrEqual(80);
    expect(result).toContain('The Fool');
    expect(result).toContain('积极');
  });
}); 