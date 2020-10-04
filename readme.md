# FikaSearch Exercise

The objective of this exercise is to fork this repository and create a `react-native` app called 'FikaSearch'. This app will comprise of a listing page of films and the names of their genres.

You have an hour to complete this. We don't expect you to complete the exercise but we do expect you to have an understandable structure, clean code, and to be able to describe your next steps.

## Technical details

### API
You will need to use the following URLs to fetch the films and genres from `the movie db` API:

movies - [https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1](https://developers.themoviedb.org/3/movies/get-now-playing)

genres - [https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US](https://developers.themoviedb.org/3/genres/get-movie-list)

#### Images

The API will provide part of the image url via the `poster_path` field of each film. It must be combined with the base image path `https://image.tmdb.org/t/p/w500/`

**Have fun!**


## Next steps

I was completing this excercise with a goal of creating a first working prototype. With this in mind I've taken some shoutcuts that would need to adressed futher in the development. 

1. Testing - event the smallest piece of code will benefit from covering it with unit tests to ensure health of the code and the functionality. I've laid some groundworks by splitting the code into components and sevices for the ease of writing unit tests.
2. Error handling - currently there is no request status monitoring, or any fallback if any of the request fail
3. UI - I've made some effort to make sure that the data is readable, but it requires more work. We could do this by following a design system to make sure that we are consistent with other our products.
4. UX - while we are awaiting for the resources the user has no information about the status of the aplication. We would have to at least display an indicator (e.g. a spinner) to show that there is still something happening behind the screen.
