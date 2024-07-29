import Spinner from './Spinner';
import CountryItem from './CountryItem';
import Message from './Message';

import styles from './CountryList.module.css';
/* eslint-disable */
function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  // Derive countries array from the cities array
  // debugger;
  const countries = cities.reduce((arr, city) => {
    console.log(arr);
    if (!arr.map(el => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  console.log('Countries:');
  console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountriesList;
