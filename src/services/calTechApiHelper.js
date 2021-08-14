import axios from "axios";

const parameters = {
	table: 'cumulative',
	where: 'koi_disposition like \'CANDIDATE\' and koi_period>300 and koi_prad<2',
	order: 'koi_period',
	format: 'json'
};

const api = axios.create({
	baseURL: 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI'
});

export const getExoplanets = async () => {
	try {
		console.log(parameters);
		return await api.get('', { parameters });
		// return await api.get(`?table=cumulative&where=koi_disposition like 'CANDIDATE' and koi_period>300 and koi_prad<2&order=koi_period&format=json`);
	} catch (error) {
		return error;
	}
};
