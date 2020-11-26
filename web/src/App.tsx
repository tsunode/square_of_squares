import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Global from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <Global />
  </>
);

export default App;
