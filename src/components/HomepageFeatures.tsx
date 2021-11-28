/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        MCSS was designed to make Minecraft servers easy. The intuitive UI allows you to quickly get a server up and running
      </>
    ),
  },
  {
    title: 'Powerful',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        MCSS can run nearly any type of server, and offers a lot of option and extra features, along with an API to control your servers remotely
      </>
    ),
  },
  {
    title: 'Actively developed',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        MCSS was created 11 years ago and is still regularly updated to fix bugs and add new features !
      </>
    ),
  },
  
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
