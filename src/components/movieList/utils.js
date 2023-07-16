export const getData = (type) => {
    return fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then(res => res.json())
}

export const getMovieData = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then(res => res.json())
}