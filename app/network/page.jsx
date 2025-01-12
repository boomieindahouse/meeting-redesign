import NetworkTitle from '../../components/network/NetworkTitle';
import Informative from '../../components/network/Informative';
import Showcase from '../../components/network/Networkshowcase';
import PopularWorks from '../../components/network/PopularWorks';


export default function Network() {
  return (
    <main>
      <NetworkTitle />
      <Informative />
      <Showcase />
      <PopularWorks />
    </main>
  );
}