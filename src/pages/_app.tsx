import { AppPropsWithLayout } from "@inteligenciaMedica/types/app.type";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider, App as AntdApp } from "antd";
import { theme } from "@inteligenciaMedica/assets";

const App = ({ Component }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <StyleProvider hashPriority="high">
      <AntdApp>
        <ConfigProvider theme={theme}>
          {getLayout(<Component />)}
        </ConfigProvider>
      </AntdApp>
      ;
    </StyleProvider>
  );
};

export default App;
