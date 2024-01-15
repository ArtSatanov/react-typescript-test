import { ItemList } from '../../components/ItemsList/ItemList';
import { useAuth } from '../../services/redux/selectors/selectors';

const UserPage = () => {
  const { isLoggedIn, token } = useAuth();
  return <div>{isLoggedIn && token && <ItemList />}</div>;
};

export default UserPage;
