"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = {
  value: number;
};

const AnimatedNumbers = (props: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(props.value);
    }
  }, [isInView, motionValue, props.value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= props.value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, props.value]);

  return <span ref={ref} className="inline-block text-7xl font-bold"></span>;
};

export default AnimatedNumbers;
