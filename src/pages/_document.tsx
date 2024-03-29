import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { createCache, extractStyle } from "@ant-design/cssinjs";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const cache = createCache();
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          initialProps.styles,
          sheet.getStyleElement(),
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `</script>${extractStyle(cache)}<script>`,
              }}
            />
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}
