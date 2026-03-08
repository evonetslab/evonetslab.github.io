import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Methods development',
    imgSrc: '/img/code.png',
    description: (
      <>
        We develop computational tools to answer biological questions.
      </>
    ),
  },
  {
    title: 'New data',
    imgSrc: '/img/field.png',
    description: (
      <>
        We learn a lot about nature by doing field work and lab experiments.
      </>
    ),
  },
  {
    title: 'Data compilation',
    imgSrc: '/img/larva.png',
    description: (
      <>
        We analyse our data together with all the data we can find in the literature for our groups of interest.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

