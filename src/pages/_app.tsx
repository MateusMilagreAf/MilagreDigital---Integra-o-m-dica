import { AppPropsWithLayout } from "@inteligenciaMedica/types/app.type";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider, App as AntdApp } from "antd";
import { theme } from "@inteligenciaMedica/assets";
import { GlobalStyles } from "./globalstyles";

const App = ({ Component }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <div>
      <GlobalStyles />
      <StyleProvider hashPriority="high">
        <AntdApp>
          <ConfigProvider theme={theme}>
            {getLayout(<Component />)}
          </ConfigProvider>
        </AntdApp>
      </StyleProvider>
    </div>
  );
};

export default App;
