import { FiSquare } from 'react-icons/fi';
import { Container, Content, ContentLeft, ContentRight } from './styles';
import { Square } from '../../pages/Dashboard';

interface LineCardProps {
  data: Square;
}

const LineCard: React.FC<LineCardProps> = ({ data }) => {
  return (
    <Container>
      <Content>
        <ContentLeft>
          <FiSquare />
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
          <span>
            Pertence ao Território: <br /> {data.id}
          </span>
          <span>Pintado em {data.created_at}</span>
        </ContentRight>
      </Content>
    </Container>
  );
};

export default LineCard;
