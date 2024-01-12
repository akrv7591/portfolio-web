import {Container} from "@mantine/core";
import Profile from "@components/home/introduce/Profile.tsx";
import Sidebar from "@components/home/Sidebar";
import Content from "@components/home/Content";
import styles from "@styles/css/home.module.css"


const Home = () => {

  return (
    <Container size={"xl"}>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <Profile/>
        </div>
        <div className={styles.grid}>
          <Content/>
        </div>
        <div className={styles.grid}>
          <Sidebar/>
        </div>
      </div>
    </Container>
  );
};

export default Home;
