import fetch from 'isomorphic-unfetch';

const Home = ({ data }) => <div>{data}</div>;

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:4000');
  const response = await res.json();
  return { data: response.message };
};

export default Home;
