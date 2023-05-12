import ScrollSpy from "react-ui-scrollspy";
import {content} from "@/constants/home";
import {Grid} from "@mantine/core";
import {motion, Variants} from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 500,
    rotateY: 40
  },
  onscreen: {
    y: 50,
    rotateY: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1
    }
  }
};

export default function Content() {

  return (
    <Grid.Col sm={12} md={7} pos={"relative"}>
      <ScrollSpy scrollThrottle={10} offsetBottom={300}>
        {content.map(({id, component: Component, icon, label}) => (
          <section id={id.toString()} key={id}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{once: true, amount: 0.8}}
            >
              <motion.div variants={cardVariants}>
                <Component icon={icon} title={label}/>
              </motion.div>
            </motion.div>

          </section>
        ))}
      </ScrollSpy>
    </Grid.Col>
  )
}