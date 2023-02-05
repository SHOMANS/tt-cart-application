import { useRoutes } from 'react-router-dom';
import Header from './components/Header';
import ProductProvider from './contexts/productContext';
import { router } from './router';

function App() {
  const routes = useRoutes(router);
  // const location = useLocation();

  // console.log(location.pathname);

  return (
    <div className='App'>
      <ProductProvider>
        <Header />
        {routes}
      </ProductProvider>
    </div>
  );
}

export default App;
