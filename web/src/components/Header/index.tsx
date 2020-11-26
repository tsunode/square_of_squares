import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container } from './styles';

interface TotalAreaTerritories {
  total_area: number;
  painted_area: number;
}

const Header: React.FC = () => {
  const [area, setArea] = useState<TotalAreaTerritories>();

  useEffect(() => {
    async function handleAreaTotal(): Promise<void> {
      const response = await api.get('territories/total-area');

      setArea(response.data.data);
    }
    handleAreaTotal();
  }, []);

  return (
    <Container>
      <h1> Dashboard</h1>

      <div>
        <span>
          Área Total:
          <span>{area?.total_area}</span>
        </span>

        <span>
          Área Total Pintada:
          <span>{area?.painted_area}</span>
        </span>
      </div>
    </Container>
  );
};

export default Header;
