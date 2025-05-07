import { drawTarotCard, getTarotCardByNumber } from '../../../features/tarot/drawCard';

describe('塔罗牌抽取功能', () => {
  test('应能生成1-78之间的随机整数', () => {
    for (let i = 0; i < 100; i++) {
      const num = drawTarotCard();
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(78);
    }
  });

  test('应能根据数字正确映射到牌面', () => {
    const card = getTarotCardByNumber(1);
    expect(card).toHaveProperty('name');
    expect(card).toHaveProperty('image');
    expect(card).toHaveProperty('meaning');
  });
}); 