import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import PriceDashboard from '../components/PriceDashboard';

const Index = props => (
    <Layout>
        <h1>Bitcoin Price</h1>
        <PriceDashboard data={props.data} />
    </Layout>
);

Index.getInitialProps = async function() {
    const result = await fetch(
        'https://api.coindesk.com/v1/bpi/currentprice.json'
    );
    const data = await result.json();
    return {
        data: data
    };
};

export default Index;
