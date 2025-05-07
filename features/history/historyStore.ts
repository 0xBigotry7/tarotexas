interface HistoryItem {
  id: number;
  content: string;
  createdAt: number;
}

let store: HistoryItem[] = [];

export function addHistory(item: HistoryItem) {
  store.unshift(item);
}

export function getHistory(): HistoryItem[] {
  return [...store];
}

export function clearHistory() {
  store = [];
} 