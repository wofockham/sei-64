import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm learning about this Gatsby stuff</p>
    </Layout>
  );
};

export const Head = () => <title>Hey Gatsby</title>;

export default IndexPage;
