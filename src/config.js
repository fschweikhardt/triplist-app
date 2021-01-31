//eslint-disable-next-line
export default { 
    API_ENDPOINT: process.env.REACT_APP_API_BASE_URL //|| 'https://triplist-api.herokuapp.com',
    || 'http://localhost:8000',
    JWT_SECRET: process.env.JWT_SECRET,
    API_TOKEN: process.env.API_TOKEN,
    IMG_KEY: process.env.IMG_KEY || '563492ad6f91700001000001cda85fe2c69f49e99526ea5ef4fd1ace',
}