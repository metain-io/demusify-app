import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

                <link rel="stylesheet" href="./css/style.css" />

                <script src="./js/darkMode.bundle.js"></script>

                <link rel="shortcut icon" href="img/favicon.ico" />
                <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
