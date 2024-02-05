import { AppLayout } from "@inteligenciaMedica/components/AppLayout";
import PageContainer from "@inteligenciaMedica/components/PageContainer";
import { NextPageWithLayout } from "@inteligenciaMedica/types/app.type";
import { Avatar, Typography } from "antd";
import { BotaoEstilizado } from "./Home.styles";

const Home: NextPageWithLayout = () => {
  const { Text } = Typography;

  return (
    <PageContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          width: 600,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <Text
            style={{
              fontSize: 32,
              color: "#fff",
              fontWeight: 500,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut leo
            metus. Quisqu
          </Text>
        </div>
        <div>
          <Text style={{ fontSize: 14, color: "#9193aa" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut leo
            metus. Quisqu
          </Text>
        </div>
        <BotaoEstilizado>Try It Free</BotaoEstilizado>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar.Group size={42}>
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
            <a href="https://ant.design">
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            </a>
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
            <a href="https://ant.design">
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            </a>
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
            <a href="https://ant.design">
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            </a>
          </Avatar.Group>
          <div>
            <Text style={{ fontSize: 15, color: "#9193aa" }}>
              Confiado por mais de 150 empresas
            </Text>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: 400,
            width: 600,
            background: "#333",
            gap: 20,
          }}
        ></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Text style={{ fontSize: 11, color: "#9193aa" }}>
            Confiado por mais de 150 empresas
          </Text>
          <div style={{ display: "flex", flexDirection: "row", gap: 15 }}>
            <Text style={{ fontSize: 18, color: "#9193aa" }}>Macal</Text>
            <Text style={{ fontSize: 18, color: "#9193aa" }}>Joao</Text>
            <Text style={{ fontSize: 18, color: "#9193aa" }}>Medico</Text>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

Home.getLayout = (page) => <AppLayout router={""}>{page}</AppLayout>;

export default Home;
