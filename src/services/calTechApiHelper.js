import axios from "axios";

const parameters = {
	table: 'cumulative',
	where: 'koi_disposition like \'CANDIDATE\' and koi_period>300 and koi_prad<2',
	order: 'koi_period',
	format: 'json'
};
// let searchParameters = '';

const api = axios.create({
	baseURL: 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI'
});

// for (let element in parameters) {
// 	if (element !== '') {
// 		searchParameters += `?${parameters[element]}`;
// 	}
// }

// console.log(searchParameters);

export const getExoplanets = async () => {
	try {
		console.log(`${parameters}`);
		return await api.get("", { parameters });
		// return await api.get(`?table=cumulative&where=koi_disposition like 'CANDIDATE' and koi_period>300 and koi_prad<2&order=koi_period&format=json`);
	} catch (error) {
		return error;
	}
};
