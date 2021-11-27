import URL from './settings-url';
const axios = require('axios');

// Запросы на списки популярных фильмов НА СЕГОДНЯ или ПО КЛЮЧЕВОМУ СЛОВУ для создания коллекции на главной странице
export const apiService = {
  url: '',
  PATH_HOME: 'trending/movie',
  PATH_SEARCH: 'search/movie',
  params: {
    api_key: `${URL.KEY}`,
    page: 1,
  },
  params_search: {
    language: 'en-US',
    query: '',
    include_adult: false,
  },

  async fetchArticles(request) {
    if (request === 'search') {
      this.url = `${URL.BASE}/${this.PATH_SEARCH}?${new URLSearchParams(
        this.params,
      ).toString()}&${new URLSearchParams(this.params_search).toString()}`;
    } else {
      this.url = `${URL.BASE}/${
        this.PATH_HOME
      }/${request}?${new URLSearchParams(this.params).toString()}`;
    }

    const { data } = await axios.get(this.url);
    return data.results;
  },

  incrementPage() {
    this.params.page += 1;
  },

  resetPage() {
    this.params.page = 1;
  },

  get page() {
    return this.params.page;
  },

  set page(newPage) {
    this.params.page = newPage;
  },

  get searchQuery() {
    return this.params_search.query;
  },

  set searchQuery(newQuery) {
    this.params_search.query = newQuery;
  },
};

// Запрос информации О ФИЛЬМЕ, ОБ АКТЁРСКОМ СОСТАВЕ и ОБЗОРОВ для страницы кинофильма
export const movieApiService = {
  PATH: `movie`,
  params: {
    api_key: `${URL.KEY}`,
    language: 'en-US',
  },

  async fetchArticles(request, id) {
    const url = `${URL.BASE}/${this.PATH}/${id}${request}?${new URLSearchParams(
      this.params,
    ).toString()}`;

    const { data } = await axios.get(url);
    return data;
  },
};
