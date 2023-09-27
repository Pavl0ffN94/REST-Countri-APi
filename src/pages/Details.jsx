import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { selectDetails } from '../store/deteils/details-selector';
import { loadCountryByName } from '../store/deteils/details-action';
import { clearDetails } from '../store/deteils/details-action';

import { Button } from '../components/Button';
import { Info } from '../components/Info';

export const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { currentCountry, error, status } = useSelector(selectDetails);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, name]);
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
