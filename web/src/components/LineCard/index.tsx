import { ImTable2 } from 'react-icons/im';
import { AiOutlineAreaChart, AiFillFormatPainter } from 'react-icons/ai';
import { Container, Content, ContentLeft, ContentRight } from './styles';
import { Territory } from '../../pages/Dashboard';

interface LineCardProps {
  data?: Territory;
}

const LineCard: React.FC<LineCardProps> = ({ data }) => {
  return (
    <Container>
      <Content>
        <ContentLeft>
          <div>
            <ImTable2 />
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
            <span>Começo</span>
            <span>Fim</span>
          </div>
        </ContentRight>
      </Content>
    </Container>
  );
};

export default LineCard;
