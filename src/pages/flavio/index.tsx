import { AppLayout } from "@inteligenciaMedica/components/AppLayout";
import Header from "@inteligenciaMedica/components/Header";
import PageContainer from "@inteligenciaMedica/components/PageContainer";
import { NextPageWithLayout } from "@inteligenciaMedica/types/app.type";
import { Avatar, Typography } from "antd";
import React from "react";
import { Standard } from "@typebot.io/nextjs";
import { HomeOutlined, MedicineBoxOutlined } from "@ant-design/icons";

const TypeBotIntegrationScreen: NextPageWithLayout = () => {
  const { Text } = Typography;

  return (
    <>
      <Header />
      <PageContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              width: "100%",
              color: "#fff",
              alignItems: "left",
              textAlign: "left",
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              <Text style={{ fontSize: 24, textAlign: "left", color: "#fff" }}>
                Dr.Flávio
              </Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: "40%",
              marginLeft: 20,
              color: "#fff",
              justifyContent: "left",
              alignItems: "left",
              textAlign: "left",
            }}
          >
            <div>
              <MedicineBoxOutlined />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 13,
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                Especialidade: Biópsia
              </Text>
            </div>
            <div>
              <HomeOutlined />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 13,
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                Endereço: Rua da Paz, Bairro luz, Número 43, 11 andar, sala 101
              </Text>
            </div>
            <Text style={{ fontSize: 13, textAlign: "left", color: "#fff" }}>
              Dr. Flávio é um renomado especialista em biópsias, cujo nome é
              sinônimo de inovação e precisão no campo médico. Com uma abordagem
              pioneira, ele se destaca pelo uso de tecnologias de ponta que
              permitem realizar procedimentos minimamente invasivos.
            </Text>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "red",
              borderRadius: 20,
              margin: 10,
            }}
          >
            <Standard
              typebot="my-typebot-h1990j4"
              style={{
                width: "100%",
                height: "600px",
                backgroundColor: "#333",
                borderRadius: 20,
              }}
            />
          </div>
        </div>
      </PageContainer>
    </>
  );
};

TypeBotIntegrationScreen.getLayout = (page) => (
  <AppLayout router={""}>{page}</AppLayout>
);

export default TypeBotIntegrationScreen;
