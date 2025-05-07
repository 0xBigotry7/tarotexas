import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';
import Svg, { Rect, Path, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

// 星空粒子生成
const Star = ({ x, y, r, opacity }: { x: number; y: number; r: number; opacity: number }) => (
  <Circle cx={x} cy={y} r={r} fill="#fff" opacity={opacity} />
);

function generateStars(num = 60) {
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

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Svg height={height} width={width} style={StyleSheet.absoluteFill}>
        {/* 星空渐变背景 */}
        <Defs>
          <LinearGradient id="bg" x1="0" y1="0" x2="0" y2={height}>
            <Stop offset="0%" stopColor="#232946" />
            <Stop offset="100%" stopColor="#2D3E50" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width={width} height={height} fill="url(#bg)" />
        {/* 星空粒子 */}
        {generateStars(60)}
      </Svg>
      <Animated.View style={[styles.center, { opacity: fadeAnim }]}> 
        {/* 极简塔罗牌SVG图案 */}
        <Svg width={90} height={140} viewBox="0 0 90 140">
          <Rect x="5" y="5" width="80" height="130" rx="16" fill="#fff" stroke="#2D3E50" strokeWidth="3" />
          <Path d="M45 30 Q55 50 45 70 Q35 50 45 30 Z" fill="#2D3E50" opacity="0.15" />
          <Circle cx="45" cy="50" r="8" fill="#2D3E50" opacity="0.25" />
        </Svg>
        <Text style={styles.logo}>Tarotexas</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232946',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 28,
    fontSize: 32,
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    letterSpacing: 2,
  },
}); 