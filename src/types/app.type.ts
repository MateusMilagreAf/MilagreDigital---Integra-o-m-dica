import { AppProps } from "antd";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type AppPropsWithLayout = AppProps & {
  Component: any;
  pca: any;
};

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
