import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout pageTitle="About Us">
            <p>Hi there! Please contact us for pricing</p>
        </Layout>
    );
};

export const Head = () => <title>About Us</title>;

export default AboutPage;