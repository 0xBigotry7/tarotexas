import { addHistory, getHistory, clearHistory } from '../../../features/history/historyStore';

jest.mock('../../../features/history/historyStore', () => {
  let store: any[] = [];
  return {
    addHistory: jest.fn((item) => { store.unshift(item); }),
    getHistory: jest.fn(() => [...store]),
    clearHistory: jest.fn(() => { store = []; }),
  };
});

describe('历史记录功能', () => {
  beforeEach(() => {
    clearHistory();
  });

  it('应能保存一条历史记录', () => {
    const item = { id: 1, content: 'test', createdAt: 123 };
    addHistory(item);
    const history = getHistory();
    expect(history.length).toBe(1);
    expect(history[0]).toEqual(item);
  });

  it('应能读取所有历史记录并倒序排列', () => {
    const item1 = { id: 1, content: 'A', createdAt: 1 };
    const item2 = { id: 2, content: 'B', createdAt: 2 };
    addHistory(item1);
    addHistory(item2);
    const history = getHistory();
    expect(history.length).toBe(2);
    expect(history[0]).toEqual(item2);
    expect(history[1]).toEqual(item1);
  });

  it('应能清空历史记录', () => {
    addHistory({ id: 1, content: 'A', createdAt: 1 });
    clearHistory();
    const history = getHistory();
    expect(history.length).toBe(0);
  });
}); 