/* eslint-disable react/react-in-jsx-scope */

import fetch from 'isomorphic-unfetch';
import { Button } from '../components/Button';

const Home = ({ data }: { data: string }): JSX.Element => (
  <div>
    <Button>Button</Button>
    {data}
  </div>
);

Home.getInitialProps = async (): Promise<{ data: string }> => {
  const res = await fetch('http://localhost:4000');
  const response = await res.json();
  return { data: response.message };
};

export default Home;
