import GraphicTitle from '../../components/graphicdesign/GraphicTitle';
import Informative from '../../components/graphicdesign/Informative';
import Showcase from '../../components/graphicdesign/Graphicshowcase';
import PopularWorks from '../../components/graphicdesign/PopularWorks';
import Clients from '../../components/layout/Clients';


export default function Graphicdesign() {
  return (
    <main>
      <GraphicTitle />
      <Informative />
      <Showcase />
      <PopularWorks />
      <Clients />
    </main>
  );
}