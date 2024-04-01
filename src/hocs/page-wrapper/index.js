import Head from "next/head";

const PageWrapper = ({ children, title = "" }) => (
  <>
    <Head>
      <title>{`${title} | Nam Dong`}</title>
    </Head>

    {children}
  </>
);

export default PageWrapper;
