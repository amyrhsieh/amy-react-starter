import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDogPic } from 'utils/api';
import SearchBox from './SearchBox';

interface DogPic {
  message: string
}

export default function MainPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const { isLoading, isError, data } = useQuery({
    queryKey: ['characters', searchTerm],
    queryFn: getDogPic,
    refetchOnWindowFocus: false
  });

  let message;

  if (isLoading) {
    message = 'Loading data...';
  } else if (isError) {
    message = 'There was an error loading data.';
  } else {
    message = 'Data has loaded successfully.';
  }

  data && console.log(data);

  return (
    <>
      <SearchBox value={searchTerm} handleChange={setSearchTerm} />
      <div>{ message }</div>
      {
        !isLoading && !isError && data &&
        <img src={(data as DogPic).message} />
      }
    </>
  );
}
