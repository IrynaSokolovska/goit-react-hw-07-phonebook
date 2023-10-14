import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { FilterForm } from './Filterstyled';
import { useDispatch } from 'react-redux';

import { handleChangeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeF = evt => {
    dispatch(handleChangeFilter(evt.currentTarget.value));
  };

  return (
    <FilterForm>
      <TextField
        id="filter"
        label="Find contacts by name"
        variant="standard"
        onChange={handleChangeF}
      />
    </FilterForm>
  );
};

FilterForm.propTypes = {
  handleChangeFilter: PropTypes.func,
};
export default FilterForm;
