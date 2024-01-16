import {HTMLAttributes, ReactNode, useEffect, useRef} from "react";
import {motion, useAnimation, useInView, Variants} from "framer-motion";

type AnimationType = "fadeUp" | "zoomInDown"


interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  type: AnimationType
  delay?: number
}

const animationVariants: Variants = {
  fadeUpHidden: {opacity: 0, y: 175},
  fadeUp: {opacity: 1, y: 0},
  zoomInDownHidden: {opacity: 0, y: 175},
  zoomInDown: {
    opacity: [0, 1, 1, 1, 1],
    y: [175, -100, 0, 0, 0],
    scale: [0, .7, 1, 1.2, 1]
  }

}

export default function Reveal({type, delay = 0.5, ...boxProps}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (!isInView) return

    mainControls.start(type)

  }, [isInView])
  return (
    <div ref={ref} {...boxProps}>
      <motion.div
        initial={`${type}Hidden`}
        variants={animationVariants}
        transition={{duration: 0.5, delay, delayChildren: delay}}
        animate={mainControls}
      >
        {boxProps.children}
      </motion.div>
    </div>
  )
}
