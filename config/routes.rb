Rails.application.routes.draw do
  get 'movies/show'
  get 'movies/top_menus'
  get 'movies/movies_master'
  get 'movies/edit'
  get 'movies/favourite_moives_list'
  get 'movies/movies_master_list'
  post 'movies/latest_movie_create'
end
