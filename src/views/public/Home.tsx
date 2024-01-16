import {Container} from "@mantine/core";
import Sidebar from "@components/home/Sidebar";
import Content from "@components/home/Content";
import styles from "@styles/css/home.module.css"
import Profile from "@components/home/introduce/Profile.tsx";


const Home = () => {

  return (
    <Container size={"xl"}>
      <div className={styles.gridContainer}>
        {/*<Profile/>*/}
        <Content/>
        <Sidebar/>
      </div>
    </Container>
  );
};

export default Home;
