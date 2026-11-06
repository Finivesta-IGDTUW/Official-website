import React, { useMemo } from "react";
import { FaChartLine, FaCoins, FaLandmark, FaPiggyBank, FaWallet } from "react-icons/fa";
import { GiReceiveMoney, GiPayMoney, GiStack, GiCutDiamond } from "react-icons/gi";

const floatingIcons = [
  FaChartLine,
  FaCoins,
  FaLandmark,
  FaPiggyBank,
  FaWallet,
  GiReceiveMoney,
  GiPayMoney,
  GiStack,
  GiCutDiamond,
];

const buildFloatingIconProps = (count) => {
  return Array.from({ length: count }, (_, index) => {
    const x = `${6 + (index * 9) % 88}%`;
    const y = `${6 + (index * 11) % 86}%`;
    const size = `${22 + (index % 5) * 10}px`;
    const delay = `${(index % 7) * -1.1}s`;
    return { x, y, size, delay, twinkle: index % 2 === 0 };
  });
};

const QuizBackground = ({ count = 18 }) => {
  const floatingProps = useMemo(() => buildFloatingIconProps(count), [count]);

  return (
    <div className="quiz-floating-icons quiz-floating-icons--dense">
      {floatingProps.map((props, index) => {
        const Icon = floatingIcons[index % floatingIcons.length];
        const className = props.twinkle ? "quiz-floating-icon quiz-twinkle quiz-glow" : "quiz-floating-icon quiz-glow";
        return (
          <span
            key={`bg-icon-${index}`}
            className={className}
            style={{
              "--x": props.x,
              "--y": props.y,
              "--size": props.size,
              "--delay": props.delay,
            }}
          >
            <Icon />
          </span>
        );
      })}
    </div>
  );
};

export default QuizBackground;
