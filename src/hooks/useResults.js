import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          location: 'Providence',
          limit: 50
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrMessage('Something went wrong!')
    }
  };
  // call searchAPI when component is first rendered 
  useEffect(() => {
    searchAPI('pasta');
  }, []);
  return [searchAPI, results, errMessage];
};
