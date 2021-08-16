import axios from "axios";

const params = {
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
		return await api.get('', { params });
	} catch (error) {
		return error;
	}
};
