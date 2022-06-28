import Button from "../../components/Button";
import Header from "../../components/Header";
import Text from "../../components/Text";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row mt-20">
        <div className="flex flex-1 justify-center flex-col">
          <Text className="text-4xl">Abubakr Khabebulloev</Text>
          <Text className="text-md mt-2">Web and mobile developer</Text>
          <Text className="text-md mt-2">Web and mobile developer</Text>

          <Button>Hello</Button>
        </div>
        <div className="flex flex-1 justify-center">
          <Text>Avatar</Text>
        </div>
      </div>
    </div>
  );
};

export default Home;
