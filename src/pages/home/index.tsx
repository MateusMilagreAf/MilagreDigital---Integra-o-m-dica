import { Avatar, Typography } from "antd";
import { AppLayout } from "@inteligenciaMedica/components/AppLayout";
import PageContainer from "@inteligenciaMedica/components/PageContainer";
import { NextPageWithLayout } from "@inteligenciaMedica/types/app.type";
import { BotaoEstilizado, PriceCardButton } from "./Home.styles";
import Header from "@inteligenciaMedica/components/Header";
import {
  ClockCircleOutlined,
  FieldTimeOutlined,
  MedicineBoxOutlined,
  SlidersOutlined,
  StarFilled,
} from "@ant-design/icons";

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
              Inteligência médica, a melhor forma de marcar consultas na área
              médica
            </Text>
          </div>
          <div>
            <Text style={{ fontSize: 14, color: "#9193aa" }}>
              Agende consultas de forma rápida, efetiva, 24/7
            </Text>
          </div>
          <BotaoEstilizado>Quero experimentar!</BotaoEstilizado>
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
                Confiado por +150 médicos
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
              Alguns de nossos clientes
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 15,
              }}
            >
              <Text style={{ fontSize: 18, color: "#9193aa" }}>
                Clinicas(logo)
              </Text>
              <Text style={{ fontSize: 18, color: "#9193aa" }}>
                Hospietais(logo)
              </Text>
              <Text style={{ fontSize: 18, color: "#9193aa" }}>
                Consultórios(logo)
              </Text>
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
              <div>
                <SlidersOutlined size={42} style={{ color: "#e76117" }} />
              </div>
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
                width: "70%",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                Simplicidade é a chave, facilite de forma rápida e efetiva a
                marcação de suas consultas
              </Text>
              <Text style={{ fontSize: 13, color: "#9193aa" }}>
                Veja uma as nossas pincipais vantagens das nossas
                funcionalidades
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
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 42,
                  height: 56,
                  width: 56,
                  background: "#1e2133",
                }}
              >
                <MedicineBoxOutlined
                  style={{ fontSize: 28, color: "#d696c9" }}
                />
              </div>
              <Text style={{ fontSize: 13, color: "#fff" }}>
                Atendimento focado na sua especialidade
              </Text>
              <Text style={{ fontSize: 13, color: "#cccee9" }}>
                O nosso chat, facilita a marcação de consultas, com as suas
                funcionalidades
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                width: 200,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 42,
                  height: 56,
                  width: 56,
                  background: "#1e2133",
                }}
              >
                <ClockCircleOutlined
                  style={{ fontSize: 28, color: "#86c07e" }}
                />
              </div>
              <Text style={{ fontSize: 13, color: "#fff" }}>
                Atendimento a todo momento, disponível 24/7
              </Text>
              <Text style={{ fontSize: 13, color: "#cccee9" }}>
                Seu chat estará disponível 24 horas por dia, 7 dias por semana
                para fazer consultas.
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                width: 200,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 42,
                  height: 56,
                  width: 56,
                  background: "#1e2133",
                }}
              >
                <FieldTimeOutlined style={{ fontSize: 28, color: "#cba28d" }} />
              </div>
              <Text style={{ fontSize: 13, color: "#fff" }}>
                Rápido e prático, integrado com a sua agenda
              </Text>
              <Text style={{ fontSize: 13, color: "#cccee9" }}>
                Consultas já marcadas na sua agenda, o que facilita sua vida!
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
                    width: 80,
                    background: "#fed8ab",
                  }}
                >
                  <Text
                    style={{ fontSize: 10, fontWeight: 600, color: "#e76117" }}
                  >
                    Depoimento
                  </Text>
                </div>
                <Text style={{ fontSize: 24, fontWeight: 500, color: "#fff" }}>
                  Dr. Carlos Silva
                </Text>
                <Text
                  style={{ fontSize: 13, fontWeight: 600, color: "#cccee9" }}
                >
                  Dermatologista, São Paulo
                </Text>
                <div style={{ width: 350 }}>
                  <Text style={{ fontSize: 13, color: "#cccee9" }}>
                    Transformador! O assistente de agendamento da Milagre
                    Digital economizou horas de trabalho e melhorou a
                    experiência do paciente, evitando sobreposições de horários.
                    Um avanço notável para nossa clínica. Dra. Ferna
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
                    width: 80,
                    background: "#fed8ab",
                  }}
                >
                  <Text
                    style={{ fontSize: 10, fontWeight: 600, color: "#e76117" }}
                  >
                    Depoimento
                  </Text>
                </div>
                <Text style={{ fontSize: 24, fontWeight: 500, color: "#fff" }}>
                  Dr. Lucas Andrade
                </Text>
                <Text
                  style={{ fontSize: 13, fontWeight: 600, color: "#cccee9" }}
                >
                  Pediatra, RJ
                </Text>
                <div style={{ width: 350 }}>
                  <Text style={{ fontSize: 13, color: "#cccee9" }}>
                    O assistente da Milagre Digital revolucionou o agendamento
                    em nossa pediatria. A customização e o suporte foram
                    excelentes, tornando a experiência de agendamento suave
                    tanto para nós quanto para os pais.
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
                    width: 80,
                    background: "#fed8ab",
                  }}
                >
                  <Text
                    style={{ fontSize: 10, fontWeight: 600, color: "#e76117" }}
                  >
                    Depoimento
                  </Text>
                </div>
                <Text style={{ fontSize: 24, fontWeight: 500, color: "#fff" }}>
                  Dra. Fernanda Rocha
                </Text>
                <Text
                  style={{ fontSize: 13, fontWeight: 600, color: "#cccee9" }}
                >
                  Cardiologista, BH
                </Text>
                <div style={{ width: 350 }}>
                  <Text style={{ fontSize: 13, color: "#cccee9" }}>
                    Nosso agendamento nunca foi tão eficiente. O sistema da
                    Milagre Digital é intuitivo e se adaptou perfeitamente às
                    nossas rotinas, melhorando significativamente a satisfação
                    dos nossos pacientes.
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
              width: "85%",
              background: "#1f2235",
              paddingRight: 30,
              paddingLeft: 30,
              height: "100%",
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <div style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: 600, color: "#fff" }}>
                Conheça nossos planos
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
                  height: 340,
                  background: "#fff",
                  borderRadius: 10,
                  paddingRight: 10,
                  paddingLeft: 10,
                  paddingTop: 30,
                  paddingBottom: 30,
                  marginTop: 20,
                  marginBottom: 20,
                  width: "28%",
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
                  Fluxo focado em seus procedimentos
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  Ativo 24/7
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  Marcação com agenda
                </Text>

                <PriceCardButton style={{ marginTop: "auto", width: "100%" }}>
                  Comprar!
                </PriceCardButton>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: 340,
                  background: "#fff",
                  borderRadius: 10,
                  paddingRight: 10,
                  paddingLeft: 10,
                  paddingTop: 30,
                  paddingBottom: 30,
                  marginTop: 20,
                  marginBottom: 20,
                  width: "28%",
                }}
              >
                <Text
                  style={{ fontSize: 13, fontWeight: 500, color: "#8c8c8c" }}
                >
                  Plano com IA
                </Text>
                <Text style={{ fontSize: 24, fontWeight: 600, color: "black" }}>
                  $499
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
                  Utiliza inteligência artifical para explicar sobre você e seus
                  procedimentos
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  Fluxo focado em seus procedimentos{" "}
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  Ativo 24/7
                </Text>

                <PriceCardButton style={{ marginTop: "auto", width: "100%" }}>
                  Comprar!
                </PriceCardButton>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: 340,
                  background: "#fff",
                  borderRadius: 10,
                  paddingRight: 10,
                  paddingLeft: 10,
                  paddingTop: 30,
                  paddingBottom: 30,
                  marginTop: 20,
                  marginBottom: 20,
                  width: "28%",
                }}
              >
                <Text
                  style={{ fontSize: 13, fontWeight: 500, color: "#8c8c8c" }}
                >
                  Plano IA Premium
                </Text>
                <Text style={{ fontSize: 24, fontWeight: 600, color: "black" }}>
                  A alinhar
                </Text>
                <Text
                  style={{
                    marginTop: -2,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  IA personalizada
                </Text>
                <Text
                  style={{
                    marginTop: 20,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  Personalização do tom de voz, modo de falar, e como deve ser o
                  atendimento
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  Atendimento por IA que contem todas as informações sobre você
                  e seus procedimentos
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  100% personalizada
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#8c8c8c",
                  }}
                >
                  Atendimento 24/7
                </Text>
                <PriceCardButton style={{ marginTop: "auto", width: "100%" }}>
                  Entrar em contato
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <StarFilled style={{ color: "#f8953c" }} />
                <StarFilled style={{ color: "#f8953c" }} />
                <StarFilled style={{ color: "#f8953c" }} />
                <StarFilled style={{ color: "#f8953c" }} />
                <StarFilled style={{ color: "#f8953c" }} />
              </div>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>
                A adoção do assistente de IA melhorou tremendamente a eficiência
                do nosso agendamento.
              </Text>
              <div>
                <Avatar
                  size={42}
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                />
              </div>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>
                João Barcelos
              </Text>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#cccee9" }}>
                Diretor - Hospital Geral de Vitória
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <StarFilled style={{ color: "#f8953c" }} />
                <StarFilled style={{ color: "#f8953c" }} />
                <StarFilled style={{ color: "#f8953c" }} />
                <StarFilled style={{ color: "#f8953c" }} />
                <StarFilled style={{ color: "#f8953c" }} />
              </div>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>
                O assistente da Milagre Digital nos destacou no mercado. A
                integração foi suave, e a eficiência operacional
              </Text>
              <div>
                <Avatar
                  size={42}
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                />
              </div>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>
                Jorge Silve
              </Text>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#cccee9" }}>
                Cirurgião chefe - Clínica Integrada de Saúde, Porto Alegre
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <StarFilled style={{ color: "#f8953c" }} />
                <StarFilled style={{ color: "#f8953c" }} />
                <StarFilled style={{ color: "#f8953c" }} />
                <StarFilled style={{ color: "#f8953c" }} />
                <StarFilled style={{ color: "#f8953c" }} />
              </div>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>
                Centro MédImplantar o assistente de IA da Milagre Digital foi um
                jogo de mudança.
              </Text>
              <div>
                <Avatar
                  size={42}
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                />
              </div>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>
                Márcia Abreu
              </Text>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#cccee9" }}>
                Presidente - Centro Médico de Diagnóstico Avançado, Curitiba
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
