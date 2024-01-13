import { ItemList } from '../../components/ItemsList/ItemList';
import { useAuth } from '../../services/redux/selectors/selectors';
import { Navigate } from 'react-router-dom';


const Home = () => {
  const { isLoggedIn, token, isAdmin } = useAuth();

  return (
    <div>
      {isLoggedIn && isAdmin && <Navigate to={'/admin'} />}
      {isLoggedIn && !isAdmin && <Navigate to={'/user'} />}
      {!isLoggedIn && !token && <ItemList />}
    </div>
  );
};

export default Home;
