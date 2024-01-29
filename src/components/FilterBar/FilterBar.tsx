import LocationSearchingSharpIcon from '@mui/icons-material/LocationSearchingSharp';
import { InputBase } from '@mui/material';
import { Search } from './FilterBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'services/redux/store';
import { selectFilter } from 'services/redux/selectors/selectors';
import { setFilter } from 'services/redux/filterSlice/filterSlice';

export const FilterBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector(selectFilter);
  return (
    <>
      <Search>
        <LocationSearchingSharpIcon sx={{ color: 'black' }} />
        <InputBase
          placeholder="search..."
          sx={{ color: '#1E1E1E', width: '100%' }}
          value={filter}
          onChange={(e: any) => dispatch(setFilter(e.target.value))}
        />
      </Search>
    </>
  );
};
