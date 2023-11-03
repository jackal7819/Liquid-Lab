import CocktailsList from '../components/CocktailsList';
import SearchForm from '../components/SearchForm';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const cocktailSearchUrl =
	'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const landingLoader = async ({ request }) => {
	const url = new URL(request.url);
	const searchTerm = url.searchParams.get('search') || '';
	const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
	return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
	const { drinks, searchTerm } = useLoaderData();

	return (
		<>
			<SearchForm searchTerm={searchTerm} />
			<CocktailsList drinks={drinks} />
		</>
	);
};

export default Landing;
