import { Avatar, Typography } from "antd";
import { AppLayout } from "@inteligenciaMedica/components/AppLayout";
import PageContainer from "@inteligenciaMedica/components/PageContainer";
import { NextPageWithLayout } from "@inteligenciaMedica/types/app.type";
import { BotaoEstilizado, PriceCardButton } from "./Home.styles";
import Header from "@inteligenciaMedica/components/Header";

const Home: NextPageWithLayout = () => {
  const { Text } = Typography;

  return (
    <>
      <Header />
      <PageContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            width: "100%",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 32,
                color: "#fff",
                fontWeight: 500,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
              leo metus. Quisqu
            </Text>
          </div>
          <div>
            <Text style={{ fontSize: 14, color: "#9193aa" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
              leo metus. Quisqu
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
              <Text style={{ fontSize: 13, color: "#9193aa" }}>
                Confiado por mais de 150 médicos
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
            <Text style={{ fontSize: 16, color: "#9193aa" }}>
              Confiado por mais de 150 empresas
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 15,
              }}
            >
              <Text style={{ fontSize: 18, color: "#9193aa" }}>Macal</Text>
              <Text style={{ fontSize: 18, color: "#9193aa" }}>Joao</Text>
              <Text style={{ fontSize: 18, color: "#9193aa" }}>Medico</Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: 11,
                borderRadius: 12,
                padding: 8,
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                background: "#fed8ab",
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 600, color: "#e76117" }}>
                .
              </Text>
              <Text style={{ fontSize: 13, fontWeight: 600, color: "#e76117" }}>
                Funcionalidades
              </Text>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 15,
                textAlign: "center",
              }}
            >
              <Text style={{ fontSize: 24, color: "#fff", fontWeight: 500 }}>
                Lorem ipsum dolor sit amet, consecteturd daw awdawdwa
              </Text>
              <Text style={{ fontSize: 13, color: "#9193aa" }}>
                Lorem ipsum dolor sit amet, consecteturd daw awdawdwa
              </Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 40,
              marginTop: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 200,
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div>Imagem</div>
              <Text style={{ fontSize: 13, color: "#fff" }}>
                A simple Heading
              </Text>
              <Text style={{ fontSize: 13, color: "#cccee9" }}>
                Lorem ipsum dolor sit amet, consecteturd daw awdawdwa
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                width: 200,
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div>Imagem</div>
              <Text style={{ fontSize: 13, color: "#fff" }}>
                A simple Heading
              </Text>
              <Text style={{ fontSize: 13, color: "#cccee9" }}>
                Lorem ipsum dolor sit amet, consecteturd daw awdawdwa
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                width: 200,
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div>Imagem</div>
              <Text style={{ fontSize: 13, color: "#fff" }}>
                A simple Heading
              </Text>
              <Text style={{ fontSize: 13, color: "#cccee9" }}>
                Lorem ipsum dolor sit amet, consecteturd daw awdawdwa
              </Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 70,
              marginTop: 80,
            }}
          >
            {/*  //card */}
            <div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  width: 400,
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: 11,
                    borderRadius: 12,
                    padding: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    width: 60,
                    background: "#fed8ab",
                  }}
                >
                  <Text
                    style={{ fontSize: 10, fontWeight: 600, color: "#e76117" }}
                  >
                    features
                  </Text>
                </div>
                <Text style={{ fontSize: 24, fontWeight: 500, color: "#fff" }}>
                  Lorem ipsum dolor sit amet, consecteturd
                </Text>
                <div style={{ width: 350 }}>
                  <Text style={{ fontSize: 13, color: "#cccee9" }}>
                    Lorem ipsum dolor sit amet, consecteturd daw awdawdwa Lorem
                    ipsum dolor sit amet, consecteturd daw awdawdwaa
                  </Text>
                </div>
              </div>
              <div
                style={{
                  background: "#333",
                  width: 400,
                  height: 250,
                  borderRadius: 16,
                }}
              ></div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: 50 }}>
              <div
                style={{
                  background: "#333",
                  width: 400,
                  height: 250,
                  borderRadius: 16,
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  width: 400,
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: 11,
                    borderRadius: 12,
                    padding: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    width: 60,
                    background: "#fed8ab",
                  }}
                >
                  <Text
                    style={{ fontSize: 10, fontWeight: 600, color: "#e76117" }}
                  >
                    features
                  </Text>
                </div>
                <Text style={{ fontSize: 24, fontWeight: 500, color: "#fff" }}>
                  Lorem ipsum dolor sit amet, consecteturd
                </Text>
                <div style={{ width: 350 }}>
                  <Text style={{ fontSize: 13, color: "#cccee9" }}>
                    Lorem ipsum dolor sit amet, consecteturd daw awdawdwa Lorem
                    ipsum dolor sit amet, consecteturd daw awdawdwaa
                  </Text>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  width: 400,
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: 11,
                    borderRadius: 12,
                    padding: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    width: 60,
                    background: "#fed8ab",
                  }}
                >
                  <Text
                    style={{ fontSize: 10, fontWeight: 600, color: "#e76117" }}
                  >
                    features
                  </Text>
                </div>
                <Text style={{ fontSize: 24, fontWeight: 500, color: "#fff" }}>
                  Lorem ipsum dolor sit amet, consecteturd
                </Text>
                <div style={{ width: 350 }}>
                  <Text style={{ fontSize: 13, color: "#cccee9" }}>
                    Lorem ipsum dolor sit amet, consecteturd daw awdawdwa Lorem
                    ipsum dolor sit amet, consecteturd daw awdawdwaa
                  </Text>
                </div>
              </div>
              <div
                style={{
                  background: "#333",
                  width: 400,
                  height: 250,
                  borderRadius: 16,
                }}
              ></div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 45,
              width: "70%",
              background: "#1f2235",
              height: "100%",
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "left",
              gap: "8%",
            }}
          >
            <div style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: 600, color: "#fff" }}>
                Nossos planos
              </Text>
            </div>
            <div
              style={{
                marginTop: 20,
                marginBottom: 30,
                display: "flex",
                gap: "14%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "80%",
                  background: "#fff",
                  borderRadius: 10,

                  paddingRight: 10,
                  paddingLeft: 10,
                  paddingTop: 30,
                  paddingBottom: 30,
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{ fontSize: 13, fontWeight: 500, color: "#8c8c8c" }}
                >
                  Plano Standard
                </Text>
                <Text style={{ fontSize: 24, fontWeight: 600, color: "black" }}>
                  $300
                </Text>
                <Text
                  style={{
                    marginTop: -2,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  por mês
                </Text>
                <Text
                  style={{
                    marginTop: 20,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  primeiro texto
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  primeiro texto
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  primeiro texto
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  primeiro texto
                </Text>
                <PriceCardButton style={{ marginTop: 30, width: 200 }}>
                  Comprar!
                </PriceCardButton>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "80%",
                  background: "#fff",
                  borderRadius: 10,

                  paddingRight: 10,
                  paddingLeft: 10,
                  paddingTop: 30,
                  paddingBottom: 30,
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{ fontSize: 13, fontWeight: 500, color: "#8c8c8c" }}
                >
                  Plano Standard
                </Text>
                <Text style={{ fontSize: 24, fontWeight: 600, color: "black" }}>
                  $300
                </Text>
                <Text
                  style={{
                    marginTop: -2,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  por mês
                </Text>
                <Text
                  style={{
                    marginTop: 20,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  primeiro texto
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  primeiro texto
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  primeiro texto
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  primeiro texto
                </Text>
                <PriceCardButton style={{ marginTop: 30, width: 200 }}>
                  Comprar!
                </PriceCardButton>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  background: "#fff",
                  borderRadius: 10,
                  paddingRight: 10,
                  paddingLeft: 10,
                  paddingTop: 30,
                  paddingBottom: 30,
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{ fontSize: 13, fontWeight: 500, color: "#8c8c8c" }}
                >
                  Plano Standard
                </Text>
                <Text style={{ fontSize: 24, fontWeight: 600, color: "black" }}>
                  $300
                </Text>
                <Text
                  style={{
                    marginTop: -2,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  por mês
                </Text>
                <Text
                  style={{
                    marginTop: 20,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  primeiro texto
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  primeiro texto
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  primeiro texto
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  primeiro texto
                </Text>
                <PriceCardButton style={{ marginTop: 30, width: 200 }}>
                  Comprar !
                </PriceCardButton>
              </div>
              {/*        </div> */}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              marginTop: 40,
              width: "65%",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 7,
                width: "25%",
              }}
            >
              <div>estrela</div>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
                leo metus. Quisqu
              </Text>
              <div>
                <Avatar
                  size={42}
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                />
              </div>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>
                Nome
              </Text>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#cccee9" }}>
                Nome Empresa
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 7,
                width: "25%",
              }}
            >
              <div>estrela</div>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
                leo metus. Quisqu
              </Text>
              <div>
                <Avatar
                  size={42}
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                />
              </div>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>
                Nome
              </Text>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#cccee9" }}>
                Nome Empresa
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 7,
                width: "25%",
              }}
            >
              <div>estrela</div>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
                leo metus. Quisqu
              </Text>
              <div>
                <Avatar
                  size={42}
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                />
              </div>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>
                Nome
              </Text>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#cccee9" }}>
                Nome Empresa
              </Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "65%",
              height: "100%",
              background: "#1f2235",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              padding: 40,
              marginTop: 45,
              gap: 20,
            }}
          >
            <Text style={{ fontSize: 24, color: "#fff" }}>
              Inteligência médica + logo
            </Text>
            <PriceCardButton style={{ width: 200 }}>Comprar !</PriceCardButton>
            <Text style={{ fontSize: 14, color: "#cccee9" }}>
              Para mais informações entre em contato através do e-mail:
              xxxxx@gmail.com, ou no telefone: +31 123131231
            </Text>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

Home.getLayout = (page) => <AppLayout router={""}>{page}</AppLayout>;

export default Home;
