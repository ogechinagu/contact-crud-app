import MobileHomeData from '../components/Home/MobileHomeData';
import WebData from '../components/Home/WebData';

import '../styles/Home.css';

const Home = () => {
  const mql = window.matchMedia('(max-width: 800px)');
  const onMobileDevice = mql.matches;

  return <div>{onMobileDevice ? <MobileHomeData /> : <WebData />}</div>;
};

export default Home;
