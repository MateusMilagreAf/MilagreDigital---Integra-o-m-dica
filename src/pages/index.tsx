import { ReactElement } from "react";
import HomeScreen from "./home";
import { NextPageWithLayout } from "@inteligenciaMedica/types/app.type";

const Home: NextPageWithLayout = () => {
  return <HomeScreen />;
};

Home.getLayout = (page: ReactElement) => {
  return <div>{page}</div>;
};

export default Home;
