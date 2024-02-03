import { ReactElement } from "react";
import { AppLayout } from "./../components/AppLayout";
import HomeScreen from "./home";
import { NextPageWithLayout } from "@inteligenciaMedica/types/app.type";

const Home: NextPageWithLayout = () => {
  return <HomeScreen />;
};

Home.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Home;
