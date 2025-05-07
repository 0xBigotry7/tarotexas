import { generateShareContent, shareToPlatform } from '../../../features/share/shareService';

describe('分享功能', () => {
  it('应能生成包含图片和解读文本的分享内容对象', () => {
    const card = { name: 'The Sun', image: 'sun.png', interpretation: '积极向上' };
    const content = generateShareContent(card);
    expect(content).toHaveProperty('image');
    expect(content).toHaveProperty('text');
    expect(content.text).toContain('The Sun');
    expect(content.text).toContain('积极向上');
  });

  it('应能调用分享API并返回成功', async () => {
    const content = { image: 'sun.png', text: 'The Sun: 积极向上' };
    const result = await shareToPlatform(content, 'wechat');
    expect(result).toBe(true);
  });
}); 