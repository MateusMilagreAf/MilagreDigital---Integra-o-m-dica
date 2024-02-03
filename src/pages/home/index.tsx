import { AppLayout } from "@inteligenciaMedica/components/AppLayout";
import { NextPageWithLayout } from "@inteligenciaMedica/types/app.type";

const HomeScreen: NextPageWithLayout = () => {
  return (
    <div>
      <h1>HomeScreen</h1>
    </div>
  );
};

HomeScreen.getLayout = (page) => <AppLayout router={""}>{page}</AppLayout>;

export default HomeScreen;
