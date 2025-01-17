import Informative from '../../components/webdesign/informative';
import WebTitle from '../../components/webdesign/WebTitle';
import Showcase from '../../components/webdesign/Showcase';
import ProjectSwiper from '../../components/webdesign/PopularWorks';
import Clients from '../../components/layout/Clients';

export default function Webdesign() {
  return (
    <main>
      <WebTitle />
      <Informative />
      <Showcase />
      <ProjectSwiper />
      <Clients />
    </main>
  );
}