class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :imdbID
      t.string :title
      t.integer :year
      t.string :favorite

      t.timestamps
    end
  end
end
