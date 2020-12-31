import {BrowserRouter as Router} from 'react-router-dom';

import {AppRouter} from './components/app-router';
import {Layout} from './components/layout';

function App() {
  return (
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  );
}

export default App;
