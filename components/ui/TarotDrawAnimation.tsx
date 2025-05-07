import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Image, Dimensions, TouchableWithoutFeedback, Easing } from 'react-native';
import EnergyRingAnimation from './EnergyRingAnimation';
import Svg, { Rect, Path, Circle } from 'react-native-svg';

interface TarotDrawAnimationProps {
  playing: boolean;
  onFinish?: () => void;
  cardColor?: string;
  imageUrl?: string;
  isReversed?: boolean;
  onCardPress?: () => void;
  outAnim?: Animated.Value;
}

/**
 * TarotDrawAnimation
 * - playing: 是否播放动画
 * - onFinish: 动画结束回调
 * - cardColor: 牌面主色
 * - imageUrl: 网络图片URL
 * - isReversed: 是否逆位
 */
const TarotDrawAnimation: React.FC<TarotDrawAnimationProps> = ({ playing, onFinish, cardColor = '#FFD700', imageUrl, isReversed, onCardPress, outAnim }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const resultAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const cardAppearAnim = useRef(new Animated.Value(0)).current; // 0:未出现, 1:完全出现
  const highlightAnim = useRef(new Animated.Value(0)).current;

  const screenWidth = Dimensions.get('window').width;
  const CARD_WIDTH = Math.min(Math.round(screenWidth * 0.6), 360);
  const CARD_HEIGHT = Math.round(CARD_WIDTH * (14 / 9));

  useEffect(() => {
    if (playing && imageUrl) {
      // 先淡出轮廓，再能量环+卡片飞入弹跳+高光扫过
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 0, duration: 400, useNativeDriver: true }),
        Animated.timing(resultAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.spring(cardAppearAnim, { toValue: 1, friction: 5, tension: 80, useNativeDriver: true }),
        Animated.spring(scaleAnim, { toValue: 1, friction: 4, useNativeDriver: true })
      ]).start(() => {
        if (onFinish) onFinish();
      });
      // 每次新卡飞入时重置并播放高光扫过
      highlightAnim.setValue(0);
      Animated.timing(highlightAnim, { toValue: 1, duration: 900, easing: Easing.out(Easing.cubic), useNativeDriver: true }).start();
    } else {
      fadeAnim.setValue(1);
      resultAnim.setValue(0);
      scaleAnim.setValue(1);
      cardAppearAnim.setValue(0);
      highlightAnim.setValue(0);
    }
  }, [playing, imageUrl]);

  // 点击卡牌时的弹跳动画
  const handleCardPress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 0.85, duration: 100, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1.08, friction: 3, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 4, useNativeDriver: true }),
    ]).start(() => {
      if (onCardPress) onCardPress();
    });
  };

  // 卡片飞入动画样式
  const cardAnimatedStyle = {
    opacity: cardAppearAnim,
    transform: [
      {
        translateY: cardAppearAnim.interpolate({
          inputRange: [0, 0.7, 1],
          outputRange: [100, -18, 0],
        })
      },
      {
        scale: cardAppearAnim.interpolate({
          inputRange: [0, 0.8, 1],
          outputRange: [0.2, 1.12, 1],
        })
      },
      ...(isReversed ? [{ rotate: '180deg' }] : [])
    ]
  };

  // 卡片消失动画样式
  const outAnimStyle = outAnim
    ? {
        opacity: outAnim,
        transform: [
          { scale: outAnim.interpolate({ inputRange: [0, 1], outputRange: [0.7, 1] }) },
        ],
      }
    : {};

  // 高光扫过动画样式
  const highlightStyle = {
    position: 'absolute' as const,
    left: 0,
    top: 0,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    opacity: highlightAnim.interpolate({ inputRange: [0, 0.2, 0.8, 1], outputRange: [0, 0.28, 0.28, 0] }),
    transform: [
      {
        translateX: highlightAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [-CARD_WIDTH, CARD_WIDTH],
        })
      },
      { rotate: '-18deg' }
    ],
    backgroundColor: 'transparent',
  };

  return (
    <View style={styles.outerColumn}>
      {/* Energy ring animation above the card when playing */}
      {playing && (
        <Animated.View style={{ opacity: resultAnim, alignItems: 'center', justifyContent: 'center' }}>
          <EnergyRingAnimation size={200} color={cardColor} playing={playing} />
          <View style={{ height: 40 }} />
          <TouchableWithoutFeedback onPress={handleCardPress}>
            <Animated.View style={[cardAnimatedStyle, outAnimStyle]}>
              {imageUrl ? (
                <View style={{ width: CARD_WIDTH, height: CARD_HEIGHT, justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={{ uri: imageUrl }}
                    style={[
                      styles.cardImg,
                      { width: CARD_WIDTH, height: CARD_HEIGHT },
                    ]}
                    resizeMode="contain"
                  />
                  {/* 高光扫过 */}
                  <Animated.View style={highlightStyle} pointerEvents="none">
                    <View style={{
                      width: CARD_WIDTH * 0.36,
                      height: CARD_HEIGHT * 1.25,
                      backgroundColor: 'rgba(255,255,255,0.75)',
                      borderRadius: CARD_WIDTH * 0.18,
                      opacity: 0.8,
                      shadowColor: '#fff',
                      shadowOpacity: 0.9,
                      shadowRadius: 20,
                      transform: [{ rotate: '8deg' }],
                    }} />
                  </Animated.View>
                </View>
              ) : (
                <Svg width={90} height={140} viewBox="0 0 90 140" style={styles.cardSvgSmall}>
                  <Rect x="5" y="5" width="80" height="130" rx="16" fill="#fff" stroke={cardColor} strokeWidth="3" />
                  <Path d="M45 30 Q55 50 45 70 Q35 50 45 30 Z" fill={cardColor} opacity="0.18" />
                  <Circle cx="45" cy="50" r="8" fill={cardColor} opacity="0.22" />
                </Svg>
              )}
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      )}
      {/* Card outline before playing */}
      {!playing && (
        <Animated.View style={{ opacity: fadeAnim }}>
          <Svg width={110} height={170} viewBox="0 0 90 140" style={styles.cardSvg}>
            <Rect x="5" y="5" width="80" height="130" rx="16" fill="#fff" stroke="#2D3E50" strokeWidth="3" />
            <Path d="M45 30 Q55 50 45 70 Q35 50 45 30 Z" fill="#2D3E50" opacity="0.12" />
            <Circle cx="45" cy="50" r="8" fill="#2D3E50" opacity="0.18" />
          </Svg>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  outerColumn: {
    width: 220,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingVertical: 10,
  },
  cardSvg: {
    alignSelf: 'center',
  },
  cardSvgSmall: {
    alignSelf: 'center',
  },
  cardImg: {
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#FFD700',
    shadowColor: '#2D3E50',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
});

export default TarotDrawAnimation; 