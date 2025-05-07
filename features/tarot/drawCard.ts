// 塔罗牌全牌库（大阿尔卡那+小阿尔卡那，示例只写部分，实际应补全）
export interface TarotCard {
  number: number;
  name: { zh: string; en: string };
  arcana: 'major' | 'minor';
  suit?: 'wands' | 'cups' | 'swords' | 'pentacles';
  image: string;
  upright: {
    keywords: { zh: string[]; en: string[] };
    meaning: { zh: string; en: string };
    advice: { zh: string; en: string };
  };
  reversed: {
    keywords: { zh: string[]; en: string[] };
    meaning: { zh: string; en: string };
    advice: { zh: string; en: string };
  };
}

// 这里只写部分牌，实际应补全78张
export const tarotCards: TarotCard[] = [
  {
    number: 1,
    name: { zh: '愚者', en: 'The Fool' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_00_Fool.jpg',
    upright: {
      keywords: { zh: ['冒险', '新开始'], en: ['adventure', 'new beginnings'] },
      meaning: {
        zh: '愚者象征着新的旅程、冒险和无限可能。',
        en: 'The Fool represents new journeys, adventures, and infinite possibilities.'
      },
      advice: {
        zh: '勇敢迈出第一步，拥抱未知。',
        en: 'Take the first step bravely and embrace the unknown.'
      }
    },
    reversed: {
      keywords: { zh: ['鲁莽', '犹豫'], en: ['recklessness', 'hesitation'] },
      meaning: {
        zh: '逆位愚者代表鲁莽、缺乏准备或犹豫不决。',
        en: 'Reversed Fool indicates recklessness, lack of preparation, or hesitation.'
      },
      advice: {
        zh: '三思而后行，避免冲动。',
        en: 'Think twice before acting, avoid impulsiveness.'
      }
    }
  },
  {
    number: 2,
    name: { zh: '魔术师', en: 'The Magician' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
    upright: {
      keywords: { zh: ['创造力', '掌控'], en: ['creativity', 'control'] },
      meaning: {
        zh: '魔术师象征着创造力、掌控力和实现愿望的能力。',
        en: 'The Magician symbolizes creativity, control, and the ability to manifest desires.'
      },
      advice: {
        zh: '相信自己的能力，主动出击。',
        en: 'Believe in your abilities and take initiative.'
      }
    },
    reversed: {
      keywords: { zh: ['欺骗', '无力'], en: ['deception', 'powerlessness'] },
      meaning: {
        zh: '逆位魔术师代表欺骗、能力受限或目标不明。',
        en: 'Reversed Magician indicates deception, limited abilities, or unclear goals.'
      },
      advice: {
        zh: '警惕虚假承诺，理清目标。',
        en: 'Beware of false promises and clarify your goals.'
      }
    }
  },
  {
    number: 3,
    name: { zh: '女祭司', en: 'The High Priestess' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg',
    upright: {
      keywords: { zh: ['直觉', '神秘'], en: ['intuition', 'mystery'] },
      meaning: {
        zh: '女祭司象征着直觉、内在智慧和神秘力量。',
        en: 'The High Priestess represents intuition, inner wisdom, and mystery.'
      },
      advice: {
        zh: '相信你的直觉，静观其变。',
        en: 'Trust your intuition and observe quietly.'
      }
    },
    reversed: {
      keywords: { zh: ['迟钝', '秘密'], en: ['insensitivity', 'secrets'] },
      meaning: {
        zh: '逆位女祭司代表迟钝、忽视内心声音或隐藏的秘密。',
        en: 'Reversed High Priestess indicates insensitivity, ignoring inner voice, or hidden secrets.'
      },
      advice: {
        zh: '多关注内心，不要逃避真相。',
        en: 'Pay more attention to your inner self, do not avoid the truth.'
      }
    }
  },
  {
    number: 4,
    name: { zh: '女皇', en: 'The Empress' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg',
    upright: {
      keywords: { zh: ['丰饶', '关爱'], en: ['abundance', 'nurturing'] },
      meaning: {
        zh: '女皇象征着丰饶、关爱和创造力。',
        en: 'The Empress represents abundance, nurturing, and creativity.'
      },
      advice: {
        zh: '关心自己和他人，享受生活。',
        en: 'Care for yourself and others, enjoy life.'
      }
    },
    reversed: {
      keywords: { zh: ['依赖', '阻碍'], en: ['dependence', 'blockage'] },
      meaning: {
        zh: '逆位女皇代表依赖、创造力受阻或情感阻碍。',
        en: 'Reversed Empress indicates dependence, creative block, or emotional obstacles.'
      },
      advice: {
        zh: '学会独立，打破内心障碍。',
        en: 'Learn to be independent and break inner barriers.'
      }
    }
  },
  {
    number: 5,
    name: { zh: '皇帝', en: 'The Emperor' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg',
    upright: {
      keywords: { zh: ['权威', '秩序'], en: ['authority', 'order'] },
      meaning: {
        zh: '皇帝象征着权威、秩序和领导力。',
        en: 'The Emperor represents authority, order, and leadership.'
      },
      advice: {
        zh: '树立规则，展现领导力。',
        en: 'Establish rules and show leadership.'
      }
    },
    reversed: {
      keywords: { zh: ['专制', '混乱'], en: ['tyranny', 'chaos'] },
      meaning: {
        zh: '逆位皇帝代表专制、失控或混乱。',
        en: 'Reversed Emperor indicates tyranny, loss of control, or chaos.'
      },
      advice: {
        zh: '避免专断，寻求平衡。',
        en: 'Avoid being overbearing, seek balance.'
      }
    }
  },
  {
    number: 6,
    name: { zh: '教皇', en: 'The Hierophant' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg',
    upright: {
      keywords: { zh: ['传统', '信仰'], en: ['tradition', 'faith'] },
      meaning: {
        zh: '教皇象征着传统、信仰和精神指导。',
        en: 'The Hierophant represents tradition, faith, and spiritual guidance.'
      },
      advice: {
        zh: '遵循传统，寻求指导。',
        en: 'Follow tradition and seek guidance.'
      }
    },
    reversed: {
      keywords: { zh: ['反叛', '僵化'], en: ['rebellion', 'rigidity'] },
      meaning: {
        zh: '逆位教皇代表反叛、僵化或信仰危机。',
        en: 'Reversed Hierophant indicates rebellion, rigidity, or crisis of faith.'
      },
      advice: {
        zh: '敢于创新，打破陈规。',
        en: 'Dare to innovate and break conventions.'
      }
    }
  },
  {
    number: 7,
    name: { zh: '恋人', en: 'The Lovers' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg',
    upright: {
      keywords: { zh: ['爱情', '选择'], en: ['love', 'choice'] },
      meaning: {
        zh: '恋人象征着爱情、和谐与重要抉择。',
        en: 'The Lovers represent love, harmony, and important choices.'
      },
      advice: {
        zh: '用心做选择，珍惜感情。',
        en: 'Make choices with your heart and cherish relationships.'
      }
    },
    reversed: {
      keywords: { zh: ['分歧', '诱惑'], en: ['discord', 'temptation'] },
      meaning: {
        zh: '逆位恋人代表分歧、诱惑或错误选择。',
        en: 'Reversed Lovers indicate discord, temptation, or wrong choices.'
      },
      advice: {
        zh: '正视分歧，避免冲动决定。',
        en: 'Face disagreements and avoid impulsive decisions.'
      }
    }
  },
  {
    number: 8,
    name: { zh: '战车', en: 'The Chariot' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/RWS_Tarot_07_Chariot.jpg',
    upright: {
      keywords: { zh: ['胜利', '意志'], en: ['victory', 'willpower'] },
      meaning: {
        zh: '战车象征着胜利、意志力和掌控。',
        en: 'The Chariot represents victory, willpower, and control.'
      },
      advice: {
        zh: '坚定信念，勇往直前。',
        en: 'Stay determined and move forward bravely.'
      }
    },
    reversed: {
      keywords: { zh: ['失控', '挫败'], en: ['loss of control', 'defeat'] },
      meaning: {
        zh: '逆位战车代表失控、挫败或方向迷失。',
        en: 'Reversed Chariot indicates loss of control, defeat, or lack of direction.'
      },
      advice: {
        zh: '调整方向，重拾信心。',
        en: 'Adjust your direction and regain confidence.'
      }
    }
  },
  {
    number: 9,
    name: { zh: '力量', en: 'Strength' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg',
    upright: {
      keywords: { zh: ['勇气', '内在力量'], en: ['courage', 'inner strength'] },
      meaning: {
        zh: '力量象征着勇气、耐心和内在的坚韧。',
        en: 'Strength represents courage, patience, and inner resilience.'
      },
      advice: {
        zh: '相信自己，温柔而坚定。',
        en: 'Believe in yourself, be gentle yet firm.'
      }
    },
    reversed: {
      keywords: { zh: ['软弱', '自卑'], en: ['weakness', 'insecurity'] },
      meaning: {
        zh: '逆位力量代表软弱、自卑或缺乏信心。',
        en: 'Reversed Strength indicates weakness, insecurity, or lack of confidence.'
      },
      advice: {
        zh: '正视自己的脆弱，逐步增强自信。',
        en: 'Acknowledge your vulnerability and build confidence step by step.'
      }
    }
  },
  {
    number: 10,
    name: { zh: '隐者', en: 'The Hermit' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg',
    upright: {
      keywords: { zh: ['内省', '智慧'], en: ['introspection', 'wisdom'] },
      meaning: {
        zh: '隐者象征着内省、独处和智慧的追求。',
        en: 'The Hermit represents introspection, solitude, and the pursuit of wisdom.'
      },
      advice: {
        zh: '静下心来，寻找内在答案。',
        en: 'Calm your mind and seek answers within.'
      }
    },
    reversed: {
      keywords: { zh: ['孤立', '逃避'], en: ['isolation', 'avoidance'] },
      meaning: {
        zh: '逆位隐者代表孤立、逃避或拒绝成长。',
        en: 'Reversed Hermit indicates isolation, avoidance, or refusal to grow.'
      },
      advice: {
        zh: '主动与人交流，勇敢面对问题。',
        en: 'Reach out to others and face problems bravely.'
      }
    }
  },
  {
    number: 11,
    name: { zh: '命运之轮', en: 'Wheel of Fortune' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg',
    upright: {
      keywords: { zh: ['转变', '机遇'], en: ['change', 'opportunity'] },
      meaning: {
        zh: '命运之轮象征着变化、机遇和命运的循环。',
        en: 'Wheel of Fortune represents change, opportunity, and the cycles of fate.'
      },
      advice: {
        zh: '顺应变化，抓住机遇。',
        en: 'Embrace change and seize opportunities.'
      }
    },
    reversed: {
      keywords: { zh: ['阻滞', '厄运'], en: ['stagnation', 'misfortune'] },
      meaning: {
        zh: '逆位命运之轮代表阻滞、厄运或无法掌控的局面。',
        en: 'Reversed Wheel of Fortune indicates stagnation, misfortune, or situations beyond control.'
      },
      advice: {
        zh: '接受暂时的低谷，静待转机。',
        en: 'Accept temporary setbacks and wait for a turnaround.'
      }
    }
  },
  {
    number: 12,
    name: { zh: '正义', en: 'Justice' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/RWS_Tarot_11_Justice.jpg',
    upright: {
      keywords: { zh: ['公正', '因果'], en: ['justice', 'karma'] },
      meaning: {
        zh: '正义象征着公平、因果报应和真理。',
        en: 'Justice represents fairness, karma, and truth.'
      },
      advice: {
        zh: '秉持公正，承担责任。',
        en: 'Uphold justice and take responsibility.'
      }
    },
    reversed: {
      keywords: { zh: ['不公', '逃避'], en: ['injustice', 'avoidance'] },
      meaning: {
        zh: '逆位正义代表不公、逃避责任或偏见。',
        en: 'Reversed Justice indicates injustice, avoidance of responsibility, or bias.'
      },
      advice: {
        zh: '正视问题，勇于改正。',
        en: 'Face issues and be brave to correct them.'
      }
    }
  },
  {
    number: 13,
    name: { zh: '倒吊人', en: 'The Hanged Man' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg',
    upright: {
      keywords: { zh: ['牺牲', '等待'], en: ['sacrifice', 'waiting'] },
      meaning: {
        zh: '倒吊人象征着牺牲、暂停和换位思考。',
        en: 'The Hanged Man represents sacrifice, pause, and seeing things from a new perspective.'
      },
      advice: {
        zh: '耐心等待，换个角度看问题。',
        en: 'Be patient and look at things from a different angle.'
      }
    },
    reversed: {
      keywords: { zh: ['僵局', '拖延'], en: ['stalemate', 'procrastination'] },
      meaning: {
        zh: '逆位倒吊人代表僵局、拖延或无谓的牺牲。',
        en: 'Reversed Hanged Man indicates stalemate, procrastination, or unnecessary sacrifice.'
      },
      advice: {
        zh: '主动行动，避免无效等待。',
        en: 'Take initiative and avoid pointless waiting.'
      }
    }
  },
  {
    number: 14,
    name: { zh: '死神', en: 'Death' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg',
    upright: {
      keywords: { zh: ['结束', '重生'], en: ['ending', 'rebirth'] },
      meaning: {
        zh: '死神象征着结束、转变和新生。',
        en: 'Death represents endings, transformation, and new beginnings.'
      },
      advice: {
        zh: '放下过去，迎接新生。',
        en: 'Let go of the past and embrace new beginnings.'
      }
    },
    reversed: {
      keywords: { zh: ['抗拒', '停滞'], en: ['resistance', 'stagnation'] },
      meaning: {
        zh: '逆位死神代表抗拒变化、停滞不前或难以释怀。',
        en: 'Reversed Death indicates resistance to change, stagnation, or inability to move on.'
      },
      advice: {
        zh: '学会接受变化，勇敢前行。',
        en: 'Learn to accept change and move forward bravely.'
      }
    }
  },
  {
    number: 15,
    name: { zh: '节制', en: 'Temperance' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg',
    upright: {
      keywords: { zh: ['平衡', '节制'], en: ['balance', 'moderation'] },
      meaning: {
        zh: '节制象征着平衡、和谐与自律。',
        en: 'Temperance represents balance, harmony, and self-discipline.'
      },
      advice: {
        zh: '保持平衡，适度而行。',
        en: 'Maintain balance and act with moderation.'
      }
    },
    reversed: {
      keywords: { zh: ['失衡', '极端'], en: ['imbalance', 'extremes'] },
      meaning: {
        zh: '逆位节制代表失衡、极端或缺乏自律。',
        en: 'Reversed Temperance indicates imbalance, extremes, or lack of self-discipline.'
      },
      advice: {
        zh: '调整步伐，避免走极端。',
        en: 'Adjust your pace and avoid extremes.'
      }
    }
  },
  {
    number: 16,
    name: { zh: '恶魔', en: 'The Devil' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg',
    upright: {
      keywords: { zh: ['诱惑', '束缚'], en: ['temptation', 'bondage'] },
      meaning: {
        zh: '恶魔象征着诱惑、束缚和物质欲望。',
        en: 'The Devil represents temptation, bondage, and material desires.'
      },
      advice: {
        zh: '警惕诱惑，保持自律。',
        en: 'Beware of temptations and maintain self-discipline.'
      }
    },
    reversed: {
      keywords: { zh: ['解脱', '觉醒'], en: ['liberation', 'awakening'] },
      meaning: {
        zh: '逆位恶魔代表解脱、觉醒或摆脱束缚。',
        en: 'Reversed Devil indicates liberation, awakening, or breaking free from bondage.'
      },
      advice: {
        zh: '勇敢挣脱束缚，追求自由。',
        en: 'Break free from constraints and pursue freedom.'
      }
    }
  },
  {
    number: 17,
    name: { zh: '高塔', en: 'The Tower' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/RWS_Tarot_16_Tower.jpg',
    upright: {
      keywords: { zh: ['突变', '崩溃'], en: ['upheaval', 'collapse'] },
      meaning: {
        zh: '高塔象征着突变、崩溃和意外事件。',
        en: 'The Tower represents upheaval, collapse, and unexpected events.'
      },
      advice: {
        zh: '接受变化，重建新生。',
        en: 'Accept change and rebuild anew.'
      }
    },
    reversed: {
      keywords: { zh: ['避免灾难', '恐惧改变'], en: ['averted disaster', 'fear of change'] },
      meaning: {
        zh: '逆位高塔代表避免灾难、恐惧改变或侥幸逃脱。',
        en: 'Reversed Tower indicates averted disaster, fear of change, or a narrow escape.'
      },
      advice: {
        zh: '正视恐惧，主动应对变化。',
        en: 'Face your fears and proactively deal with change.'
      }
    }
  },
  {
    number: 18,
    name: { zh: '星星', en: 'The Star' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/RWS_Tarot_17_Star.jpg',
    upright: {
      keywords: { zh: ['希望', '灵感'], en: ['hope', 'inspiration'] },
      meaning: {
        zh: '星星象征着希望、灵感和治愈。',
        en: 'The Star represents hope, inspiration, and healing.'
      },
      advice: {
        zh: '保持信心，追随梦想。',
        en: 'Keep faith and follow your dreams.'
      }
    },
    reversed: {
      keywords: { zh: ['失望', '迷茫'], en: ['despair', 'confusion'] },
      meaning: {
        zh: '逆位星星代表失望、迷茫或缺乏信心。',
        en: 'Reversed Star indicates despair, confusion, or lack of faith.'
      },
      advice: {
        zh: '重拾希望，调整心态。',
        en: 'Regain hope and adjust your mindset.'
      }
    }
  },
  {
    number: 19,
    name: { zh: '月亮', en: 'The Moon' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg',
    upright: {
      keywords: { zh: ['幻象', '潜意识'], en: ['illusion', 'subconscious'] },
      meaning: {
        zh: '月亮象征着幻象、潜意识和不确定性。',
        en: 'The Moon represents illusion, subconscious, and uncertainty.'
      },
      advice: {
        zh: '倾听内心，警惕迷惑。',
        en: 'Listen to your inner voice and beware of confusion.'
      }
    },
    reversed: {
      keywords: { zh: ['真相', '释疑'], en: ['truth', 'clarity'] },
      meaning: {
        zh: '逆位月亮代表真相大白、释疑或走出迷雾。',
        en: 'Reversed Moon indicates truth revealed, clarity, or coming out of confusion.'
      },
      advice: {
        zh: '相信事实，勇敢面对真相。',
        en: 'Trust the facts and face the truth bravely.'
      }
    }
  },
  {
    number: 20,
    name: { zh: '太阳', en: 'The Sun' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg',
    upright: {
      keywords: { zh: ['成功', '喜悦'], en: ['success', 'joy'] },
      meaning: {
        zh: '太阳象征着成功、喜悦和积极能量。',
        en: 'The Sun represents success, joy, and positive energy.'
      },
      advice: {
        zh: '享受当下，积极面对生活。',
        en: 'Enjoy the moment and face life positively.'
      }
    },
    reversed: {
      keywords: { zh: ['失落', '悲观'], en: ['loss', 'pessimism'] },
      meaning: {
        zh: '逆位太阳代表失落、悲观或缺乏动力。',
        en: 'Reversed Sun indicates loss, pessimism, or lack of motivation.'
      },
      advice: {
        zh: '调整心态，寻找新的希望。',
        en: 'Adjust your mindset and seek new hope.'
      }
    }
  },
  {
    number: 21,
    name: { zh: '审判', en: 'Judgement' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg',
    upright: {
      keywords: { zh: ['觉醒', '复苏'], en: ['awakening', 'rebirth'] },
      meaning: {
        zh: '审判象征着觉醒、复苏和自我反省。',
        en: 'Judgement represents awakening, rebirth, and self-reflection.'
      },
      advice: {
        zh: '反思过去，迎接新生。',
        en: 'Reflect on the past and embrace renewal.'
      }
    },
    reversed: {
      keywords: { zh: ['逃避', '自责'], en: ['avoidance', 'guilt'] },
      meaning: {
        zh: '逆位审判代表逃避、内疚或拒绝改变。',
        en: 'Reversed Judgement indicates avoidance, guilt, or refusal to change.'
      },
      advice: {
        zh: '正视内心，勇于改变。',
        en: 'Face your inner self and be brave to change.'
      }
    }
  },
  {
    number: 22,
    name: { zh: '世界', en: 'The World' },
    arcana: 'major',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg',
    upright: {
      keywords: { zh: ['完成', '圆满'], en: ['completion', 'fulfillment'] },
      meaning: {
        zh: '世界象征着完成、圆满和成就。',
        en: 'The World represents completion, fulfillment, and achievement.'
      },
      advice: {
        zh: '庆祝成果，开启新旅程。',
        en: 'Celebrate your achievements and start a new journey.'
      }
    },
    reversed: {
      keywords: { zh: ['未完成', '停滞'], en: ['incompletion', 'stagnation'] },
      meaning: {
        zh: '逆位世界代表未完成、停滞或缺乏目标。',
        en: 'Reversed World indicates incompletion, stagnation, or lack of direction.'
      },
      advice: {
        zh: '设定目标，继续前行。',
        en: 'Set new goals and keep moving forward.'
      }
    }
  },
];

// 随机抽取一张牌（含正逆位）
export function drawTarotCard(): { card: TarotCard; isReversed: boolean } {
  const idx = Math.floor(Math.random() * tarotCards.length);
  const isReversed = Math.random() < 0.5;
  return { card: tarotCards[idx], isReversed };
}

// 根据number获取牌对象
export function getTarotCardByNumber(num: number): TarotCard | undefined {
  return tarotCards.find(card => card.number === num);
} 