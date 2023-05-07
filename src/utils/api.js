const API_KEY = 'd65c2cf4593a94d3e691ac6661b182bd'
const API_BASE = 'https://api.themoviedb.org/3/'

async function basicFetch(endpoint) {
  const request = await fetch(`${API_BASE}${endpoint}`)
  const json = await request.json()
  return json
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'trending',
        title: 'Recomendados para você',
        filmList: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        filmList: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        filmList: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comedia',
        filmList: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        filmList: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        filmList: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentarios',
        filmList: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ]
  },

  getFeatured: async (id, type) => {
    const request = await fetch(`${API_BASE}${type}/${id}?api_key=${API_KEY}&language=pt-BR`)
    const json = await request.json()
    return json
  }
}