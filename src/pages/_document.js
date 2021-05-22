import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* CDN's, ícono, styles, google analytics, etc */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* script de externos y propios */}
                </body>
            </Html>
        )
    }
}

export default MyDocument