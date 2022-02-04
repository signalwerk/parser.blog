const App = ({ Component, pageProps = {} }) => (
  <>
    <main>
      <Component {...pageProps} />
    </main>
  </>
);

export default App;
