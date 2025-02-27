import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import CoverImageUrl from '@site/static/img/thesis_cover.png';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <div className="container">
    <Heading as="h1" className="hero__title">
    {siteConfig.title}
    </Heading>
    <p className="hero__subtitle">{siteConfig.tagline}</p>
    <div className={styles.buttons}>
    {/* <Link
      className="button button--secondary button--lg"
      to="/docs/intro">
      Docusaurus Tutorial - 5min ⏱️
      </Link> */}
      </div>
      </div>
      </header>
    );
  }
  
  export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section className="my-new-section">
          <div className="container">
            <img src={CoverImageUrl} />;
          </div>
        </section>
        <HomepageFeatures />
      </main>
      </Layout>
    );
  }
  