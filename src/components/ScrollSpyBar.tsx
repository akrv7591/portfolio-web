import * as React from 'react'
import {animated, useScroll} from '@react-spring/web'
import styles from '../styles/sas/scroll-spy-bar.module.scss'

const X_LINES = 300
const INITIAL_HEIGHT = 10

interface Props {
  children?: React.ReactNode
}

export default function ScrollSpyBar(props: Props) {
  const barContainerRef = React.useRef<HTMLDivElement>(null!)
  const {scrollYProgress} = useScroll()

  return (
    <animated.div ref={barContainerRef} className={styles.bar__container}>
      {Array.from({length: X_LINES}).map((_, i) => (
        <animated.div
          key={i}
          className={styles.bar}
          style={{
            width: "1%",
            backgroundColor: "#76f1e9",
            borderBottomRightRadius: "1.5px",
            borderBottomLeftRadius: "1.5px",
            height: scrollYProgress.to(scrollP => {
              const percentilePosition = (i + 1) / X_LINES

              return (INITIAL_HEIGHT / 4 + 20 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 100).toString() + "px"
            }),
          }}
        />
      ))}
    </animated.div>
  )
}
