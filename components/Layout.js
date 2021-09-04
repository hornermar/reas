import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head></Head>
      <header>
        <div className="App"></div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
