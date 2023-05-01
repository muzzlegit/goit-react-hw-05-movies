import PropTypes from 'prop-types';
import { useState } from 'react';
//ICONS
import { MdRocketLaunch } from 'react-icons/md';
//STYLES
import { Form, Input, Button } from './SearchBar.styles';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onInputChange = e => {
    setQuery(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') return;
    onSubmit(query.trim());
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        type="text"
        name="name"
        required
        placeholder="...search movie"
        value={query}
        onChange={onInputChange}
      />
      <Button type="submit" title="Search Movie">
        <MdRocketLaunch size="20px" />
      </Button>
    </Form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
