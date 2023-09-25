export const SET_COUNTRIES = '@@country/SET_COUNTRIES';
export const SET_LOADING = '@@country/SET_LOADING';
export const SET_ERROR = '@@country/SET_ERROR';

export const setCountries = (countries) => ({
    type: SET_COUNTRIES,
    payload:countries
})

export const setLoading = () => ({
    type: SET_LOADING,
})

export const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
})

export const loadCountries = () => (dispath, _, {client, api}) => {
    dispath(setLoading())

    client.get(api.ALL_COUNTRIES)
    .then(({data})=> dispath(setCountries(data)))
    .catch((err)=> dispath(setError(err.message)))
}