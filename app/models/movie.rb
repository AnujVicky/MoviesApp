class Movie < ApplicationRecord
   validates_uniqueness_of :imdbID, :title, :year
end
