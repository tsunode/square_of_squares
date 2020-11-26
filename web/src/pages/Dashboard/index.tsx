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

export interface Territory {
  id: string;
  name: string;
  area: number;
  start: { x: number; y: number };
  end: { x: number; y: number };
  painted_area: number;
}

interface ResponseTerritories {
  count: number;
  data: Territory[];
}

const Dashboard: React.FC = () => {
  const [territories, setTerritories] = useState<Territory[]>();
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
        api.get<ResponseTerritories>('squares'),
      ]);

      console.log(responseSquares);
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
          <Squares>
            <Title>Últimos 5 Quadrados Pintados</Title>
          </Squares>

          <Errors>
            <Title>Últimos 5 Erros</Title>
          </Errors>
        </SectionReport>
      </Content>
    </Container>
  );
};

export default Dashboard;
