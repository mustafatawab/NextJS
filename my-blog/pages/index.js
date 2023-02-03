import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Self Introduction</p>
        <p>
          This is simple bloging website. I developer has a lot of exeprience in
          builidng 2D and 3D web apps. His name is Mustafa Tawab.
        </p>
      </section>
    </Layout>
  );
}
