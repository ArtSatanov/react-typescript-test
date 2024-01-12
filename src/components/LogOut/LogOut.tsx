import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../services/redux/store';
import { logOutUser } from '../../services/redux/Operations/operations';
import { logOut } from '../../services/redux/authSlice/authSlice';

export const LogOut = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handlerClick = () => {
    dispatch(logOutUser());
    dispatch(logOut());
  };

  return (
    <div>
      <button type="button" onClick={handlerClick}>
        Logout
      </button>
    </div>
  );
};
