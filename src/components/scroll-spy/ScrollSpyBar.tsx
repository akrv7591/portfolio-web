import * as React from 'react'
import {m, useScroll} from "framer-motion"
import styles from "@styles/css/scroll-spy.module.css";

const X_LINES = 50
const INITIAL_HEIGHT = 10

export default function ScrollSpyBar() {
  const barContainerRef = React.useRef<HTMLDivElement>(null!)
  const [scrollP, setScrollP] = React.useState(0)
  const {scrollYProgress} = useScroll()


  React.useEffect(() => {

    if (!barContainerRef.current) return

    scrollYProgress.on("change", v => {
      setScrollP(v)
    })
  }, [barContainerRef])

  const renderBars = () => Array.from({length: X_LINES}).map((_, i) => (
    <m.div
      key={i}
      style={{
        height: "1%",
        backgroundColor: "#c8d0cf",
        width: (() => {
          const percentilePosition = (i + 1) / X_LINES

          return (INITIAL_HEIGHT / 4 + 20 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 100).toString() + "px"
        })(),
      }}
    />
  ))


  return (
    <>
      <m.div ref={barContainerRef} className={styles.leftBar}>
        {renderBars()}
      </m.div>
      <m.div ref={barContainerRef} className={styles.rightBar}>
        {renderBars()}
      </m.div>
    </>
  )
}
