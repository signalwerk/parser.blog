import { Head } from "@fsoc/dhow";

export const baseHeader = [
  <link rel="preconnect" href="https://fonts.signalwerk.ch" />,
  <link
    href="https://fonts.signalwerk.ch/css/latest/family=Open+Sans:ital,wght@0,300..800;1,300..800.css"
    rel="stylesheet"
  />,
  <link
    rel="stylesheet"
    href="https://rawcdn.githack.com/signalwerk/signalwerk.styles/72d62b5/styles/blog.critical.css"
    media="all"
  />,
  <link
    rel="preload"
    as="style"
    onload="this.onload=null;this.rel='stylesheet'"
    href="https://rawcdn.githack.com/signalwerk/signalwerk.styles/72d62b5/styles/blog.rest.css"
    media="all"
  />,
];
// {/* <Head>{baseHeader}</Head> */}

const Document = () => (
  <>
    <html>
      <head></head>
      <body>{/* Pages will get inserted here. */}</body>
    </html>
  </>
);

export default Document;


