import { ImTable2 } from 'react-icons/im';
import { AiOutlineAreaChart, AiFillFormatPainter } from 'react-icons/ai';
import { Container, Content, ContentLeft, ContentRight } from './styles';
import { Territory } from '../../pages/Dashboard';

interface LongCardProps {
  data: Territory;
}

const LongCard: React.FC<LongCardProps> = ({ data }) => {
  return (
    <Container>
      <Content>
        <ContentLeft>
          <div>
            <ImTable2 />
            <span>{data.name}</span>
          </div>

          <div>
            <span>
              Começo
              <span>
                X: {data.start.x}, Y: {data.start.y}
              </span>
            </span>
            <span>
              Fim
              <span>
                X: {data.end.x}, Y: {data.end.y}
              </span>
            </span>
          </div>
        </ContentLeft>

        <ContentRight>
          <div>
            <AiOutlineAreaChart />

            <span> Área </span>

            <span>{data.area}</span>
          </div>

          <div>
            <AiFillFormatPainter />

            <span> Áreas Pintadas </span>

            <span>{data.painted_area}</span>
          </div>
        </ContentRight>
      </Content>
    </Container>
  );
};

export default LongCard;
