import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native';
import Svg, { Rect, Path, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import TarotDrawAnimation from '../components/ui/TarotDrawAnimation';
import { drawTarotCard } from '../features/tarot/drawCard';

const { width, height } = Dimensions.get('window');

// 星空粒子生成
const Star = ({ x, y, r, opacity }: { x: number; y: number; r: number; opacity: number }) => (
  <Circle cx={x} cy={y} r={r} fill="#fff" opacity={opacity} />
);
function generateStars(num = 40) {
  return Array.from({ length: num }).map((_, i) => (
    <Star
      key={i}
      x={Math.random() * width}
      y={Math.random() * height}
      r={Math.random() * 1.5 + 0.5}
      opacity={Math.random() * 0.7 + 0.3}
    />
  ));
}

// mock塔罗牌和AI解读
const mockCard = {
  name: 'The Sun',
  image: null, // 可替换为真实图片
  meaning: '象征成功、喜悦与积极能量',
};
const mockInterpretation = '今天阳光洒满你的生活，积极的能量将带来好运。勇敢迈步，收获属于你的成功！';

export default function HomeScreen() {
  const [drawn, setDrawn] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));
  const [resultAnim] = useState(new Animated.Value(0));
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [lottieError, setLottieError] = useState(false);
  const [lottieReady, setLottieReady] = useState(false);
  const [currentCard, setCurrentCard] = useState<ReturnType<typeof drawTarotCard> | null>(null);
  const [pendingCard, setPendingCard] = useState<ReturnType<typeof drawTarotCard> | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardOutAnim = useRef(new Animated.Value(1)).current;

  // 多语言文案
  const t = (zh: string, en: string) => (lang === 'zh' ? zh : en);

  useEffect(() => {
    // 尝试预加载Lottie动画，若失败则降级
    (async () => {
      try {
        // 动态import可捕获异常
        await import('../assets/lottie/starfield.json');
        setLottieReady(true);
      } catch {
        setLottieError(true);
      }
    })();
  }, []);

  const handleDraw = () => {
    // 真实抽卡
    const result = drawTarotCard();
    setCurrentCard(result);
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 400, useNativeDriver: true }),
      Animated.timing(resultAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
    ]).start(() => setDrawn(true));
  };

  const handleReset = () => {
    setDrawn(false);
    setCurrentCard(null);
    fadeAnim.setValue(1);
    resultAnim.setValue(0);
  };

  // 切换到新卡牌的完整过渡
  const handleCardPress = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    Animated.timing(cardOutAnim, { toValue: 0, duration: 420, useNativeDriver: true }).start(() => {
      cardOutAnim.setValue(1); // 先重置为可见
      setTimeout(() => {
        const result = drawTarotCard();
        setCurrentCard(result); // 下一帧再切换卡牌
        setDrawn(true);
        setIsTransitioning(false);
      }, 16); // 16ms约等于一帧
    });
  };

  // 首次进入时自动抽一张
  useEffect(() => {
    if (!currentCard) {
      setCurrentCard(drawTarotCard());
      setDrawn(true);
    }
  }, [currentCard]);

  // 真实抽卡内容
  const cardName = currentCard ? currentCard.card.name[lang] + (currentCard.isReversed ? t('（逆位）', ' (Reversed)') : '') : '';
  const interpretation = currentCard
    ? currentCard.isReversed
      ? currentCard.card.reversed.meaning[lang]
      : currentCard.card.upright.meaning[lang]
    : '';
  const advice = currentCard
    ? currentCard.isReversed
      ? currentCard.card.reversed.advice[lang]
      : currentCard.card.upright.advice[lang]
    : '';

  return (
    <View style={styles.container}>
      {/* Lottie星空背景，加载失败时降级为SVG星空 */}
      {lottieReady && !lottieError ? (
        <LottieView
          source={require('../assets/lottie/starfield.json')}
          autoPlay
          loop
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />
      ) : (
        <Svg height={height} width={width} style={StyleSheet.absoluteFill}>
          <Defs>
            <LinearGradient id="bg" x1="0" y1="0" x2="0" y2={height}>
              <Stop offset="0%" stopColor="#232946" />
              <Stop offset="100%" stopColor="#2D3E50" />
            </LinearGradient>
          </Defs>
          <Rect x="0" y="0" width={width} height={height} fill="url(#bg)" />
          {generateStars(40)}
        </Svg>
      )}
      {/* 顶部应用名和语言切换 */}
      <View style={styles.header}>
        <Text style={styles.appName}>Tarotexas</Text>
        <TouchableOpacity onPress={() => setLang(lang === 'zh' ? 'en' : 'zh')} style={styles.langBtn}>
          <Text style={styles.langText}>{lang === 'zh' ? 'EN' : '中'}</Text>
        </TouchableOpacity>
      </View>
      {/* 中央区域 */}
      <View style={styles.centerArea}>
        {/* 组件化抽牌动画区域 */}
        <TarotDrawAnimation
          playing={drawn}
          cardColor="#FFD700"
          onFinish={() => {}}
          imageUrl={currentCard && drawn ? currentCard.card.image : undefined}
          isReversed={currentCard && drawn ? currentCard.isReversed : false}
          onCardPress={handleCardPress}
          outAnim={cardOutAnim}
        />
        {/* 抽牌按钮，仅在未抽牌时显示 */}
        {!drawn && (
          <Button
            mode="contained"
            style={styles.drawBtn}
            labelStyle={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 1 }}
            contentStyle={{ height: 48 }}
            onPress={handleDraw}
          >
            {t('抽取今日运势', 'Draw Today\'s Fortune')}
          </Button>
        )}
        {/* 结果与AI解读，仅在抽牌后显示 */}
        {drawn && currentCard && (
          <View style={{ alignItems: 'center', marginTop: 12 }}>
            <Text style={styles.cardName}>{cardName}</Text>
            <View style={styles.interpretCard}>
              <Text style={styles.interpretText}>{interpretation}</Text>
              <Text style={[styles.interpretText, { marginTop: 8, color: '#2D3E50', fontWeight: 'bold' }]}>{t('建议', 'Advice')}: {advice}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 18 }}>
              <Button
                mode="text"
                style={styles.shareBtn}
                icon="share-variant"
                labelStyle={{ color: '#888', fontWeight: 'bold' }}
                onPress={() => {}}
              >
                {t('分享', 'Share')}
              </Button>
            </View>
          </View>
        )}
      </View>
      {/* 底部极简导航栏 */}
      <View style={styles.bottomNav}>
        <NavIcon name="home-variant-outline" label={t('首页', 'Home')} active />
        <NavIcon name="cards-outline" label={t('高级占卜', 'Advanced')} />
        <NavIcon name="star-outline" label={t('我的运势', 'My Fortune')} />
        <NavIcon name="history" label={t('历史记录', 'History')} />
      </View>
    </View>
  );
}

function NavIcon({ name, label, active = false }: { name: string; label: string; active?: boolean }) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <MaterialCommunityIcons
        name={name as any}
        size={28}
        color={active ? '#2D3E50' : '#888'}
        style={{ marginBottom: 2 }}
      />
      <Text style={[styles.navLabel, active && { color: '#2D3E50', fontWeight: 'bold' }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    marginTop: 60,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appName: {
    fontSize: 20,
    color: '#888',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 2,
    fontWeight: '600',
  },
  centerArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardSvg: {
    marginBottom: 36,
    shadowColor: '#2D3E50',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  drawBtn: {
    borderRadius: 16,
    backgroundColor: '#fff',
    marginTop: 12,
    shadowColor: '#2D3E50',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  cardName: {
    fontSize: 22,
    color: '#2E2E2E',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
    letterSpacing: 1,
  },
  interpretCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 22,
    marginTop: 6,
    shadowColor: '#2D3E50',
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
    minWidth: 260,
    maxWidth: 320,
  },
  interpretText: {
    color: '#888',
    fontSize: 15,
    lineHeight: 22,
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
  },
  againBtn: {
    borderRadius: 12,
    borderColor: '#2D3E50',
    marginRight: 10,
    backgroundColor: '#F5F7FA',
  },
  shareBtn: {
    borderRadius: 12,
    backgroundColor: 'transparent',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 68,
    borderTopWidth: 1,
    borderTopColor: '#F5F7FA',
    backgroundColor: 'rgba(255,255,255,0.92)',
    paddingBottom: 10,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 0,
    fontFamily: 'Helvetica Neue',
  },
  langBtn: {
    marginLeft: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    backgroundColor: '#F5F7FA',
  },
  langText: {
    color: '#2D3E50',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
  },
}); 