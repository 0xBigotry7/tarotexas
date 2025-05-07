import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

interface EnergyRingAnimationProps {
  size?: number;
  color?: string;
  playing?: boolean;
}

export const EnergyRingAnimation: React.FC<EnergyRingAnimationProps> = ({
  size = 280,
  color = '#FFD700',
  playing = true,
}) => {
  const [lottieReady, setLottieReady] = useState(false);
  const [lottieError, setLottieError] = useState(false);
  const lottieRef = useRef<LottieView>(null);

  useEffect(() => {
    (async () => {
      try {
        await import('../../assets/lottie/energy-ring.json');
        setLottieReady(true);
      } catch {
        setLottieError(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (lottieReady && lottieRef.current) {
      if (playing) {
        lottieRef.current.play();
      } else {
        lottieRef.current.reset();
      }
    }
  }, [playing, lottieReady]);

  if (lottieReady && !lottieError) {
    return (
      <LottieView
        ref={lottieRef}
        source={require('../../assets/lottie/energy-ring.json')}
        autoPlay={playing}
        loop={playing}
        style={{ width: size, height: size, position: 'absolute', top: 0, left: 0, opacity: 0.95 }}
        resizeMode="cover"
        colorFilters={[
          { keypath: 'Shape Layer 1', color: color },
          { keypath: 'Ellipse 1', color: color },
          { keypath: 'energy', color: color },
        ]}
      />
    );
  }

  // SVG降级方案：旋转渐变能量环
  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        <Defs>
          <LinearGradient id="energy" x1="0" y1="0" x2={size} y2={size}>
            <Stop offset="0%" stopColor={color} stopOpacity="0.7" />
            <Stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </LinearGradient>
        </Defs>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 6}
          stroke="url(#energy)"
          strokeWidth={8}
          fill="none"
          opacity={0.7}
        />
      </Svg>
    </View>
  );
};

export default EnergyRingAnimation; 