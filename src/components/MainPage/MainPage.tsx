import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCharacters } from 'utils/api';
import SearchBox from './SearchBox';

export default function MainPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const { isLoading, isError, data } = useQuery({
    queryKey: ['characters', searchTerm],
    queryFn: getCharacters
  });

  let message;

    if (isLoading) {
      message = 'Loading data...';
    } else if (isError) {
      message = 'There was an error loading data.';
    } else {
      message = 'Data has loaded successfully.';
    }

  return (
    <>
      <SearchBox value={searchTerm} handleChange={setSearchTerm} />
      <div>{ message }</div>
    </>
  );
}
