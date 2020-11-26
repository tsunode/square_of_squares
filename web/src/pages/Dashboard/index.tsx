import { useEffect, useState } from 'react';
import {
  Container,
  Content,
  SectionTerritory,
  InputRadio,
  SectionReport,
  Title,
  Squares,
  Errors,
} from './styles';

import Header from '../../components/Header';
import LongCard from '../../components/LongCard';
import api from '../../services/api';
import LineCard from '../../components/LineCard';

export interface Territory {
  id: string;
  name: string;
  area: number;
  start: { x: number; y: number };
  end: { x: number; y: number };
  painted_area: number;
}

export interface Square {
  id: string;
  area: number;
  start: { x: number; y: number };
  end: { x: number; y: number };
  territory_id: string;
  created_at_formated: string;
}

interface ResponseTerritories {
  count: number;
  data: Territory[];
  error: boolean;
}

interface ResponseSquares {
  data: Square[];
  error: boolean;
}

const Dashboard: React.FC = () => {
  const [territories, setTerritories] = useState<Territory[]>();
  const [squares, setSquares] = useState<Square[]>();
  const [order, setOrder] = useState('mpa');

  useEffect(() => {
    async function getTerritories(): Promise<void> {
      const response = await api.get<ResponseTerritories>('territories', {
        params: {
          order,
        },
      });

      setTerritories(response.data.data);
    }
    getTerritories();
  }, [order]);

  useEffect(() => {
    async function handleDashboardData(): Promise<void> {
      const [responseSquares] = await Promise.all([
        api.get<ResponseSquares>('squares'),
      ]);

      console.log(responseSquares);
      setSquares(responseSquares.data.data);
    }
    handleDashboardData();
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <SectionTerritory>
          <InputRadio>
            <input
              type="radio"
              id="painted"
              name="filter-radio"
              value="mpa"
              defaultChecked
              onClick={e => setOrder(e.currentTarget.value)}
            />
            <label htmlFor="painted">+ Pintada</label>
            <input
              type="radio"
              id="paintend-proportional"
              value="mppa"
              name="filter-radio"
              onClick={e => setOrder(e.currentTarget.value)}
            />
            <label htmlFor="paintend-proportional">
              + Pintada Proporcionalmente
            </label>
          </InputRadio>

          <div>
            {territories &&
              territories.map(territory => (
                <LongCard key={territory.id} data={territory} />
              ))}
            {!territories && <Title>Não há territórios cadastrados</Title>}
          </div>
        </SectionTerritory>

        <SectionReport>
          <div>
            <Squares>
              <Title>Últimos 5 Quadrados Pintados</Title>

              <div>
                {squares &&
                  squares.map(square => (
                    <LineCard key={square.id} data={square} />
                  ))}
              </div>
            </Squares>

            <Errors>
              <Title>Últimos 5 Erros</Title>

              <table>
                <tbody>
                  <tr>
                    <td>Teste</td>
                    <td>25/12/19</td>
                  </tr>
                  <tr>
                    <td>Teste</td>
                    <td>25/12/19</td>
                  </tr>
                  <tr>
                    <td>Teste</td>
                    <td>25/12/19</td>
                  </tr>
                  <tr>
                    <td>Teste</td>
                    <td>25/12/19</td>
                  </tr>
                  <tr>
                    <td>Teste</td>
                    <td>25/12/19</td>
                  </tr>
                </tbody>
              </table>
            </Errors>
          </div>
        </SectionReport>
      </Content>
    </Container>
  );
};

export default Dashboard;
