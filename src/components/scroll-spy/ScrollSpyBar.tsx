import * as React from 'react'
import {animated, useScroll} from '@react-spring/web'
import {useScrollSpyBarStyles} from "@/components/scroll-spy/styles";

const X_LINES = 50
const INITIAL_HEIGHT = 10

export default function ScrollSpyBar( ) {
  const barContainerRef = React.useRef<HTMLDivElement>(null!)
  const {scrollYProgress} = useScroll()
  const {classes} = useScrollSpyBarStyles()
  const renderBars = () => Array.from({length: X_LINES}).map((_, i) => (
    <animated.div
      key={i}
      style={{
        height: "1%",
        backgroundColor: "#c8d0cf",
        width: scrollYProgress.to(scrollP => {
          const percentilePosition = (i + 1) / X_LINES

          return (INITIAL_HEIGHT / 4 + 20 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 100).toString() + "px"
        }),
      }}
    />
  ))


  return (
    <>
      <animated.div ref={barContainerRef} className={classes.leftBar}>
        {renderBars()}
      </animated.div>
      <animated.div ref={barContainerRef} className={classes.rightBar}>
        {renderBars()}
      </animated.div>
    </>
  )
}
