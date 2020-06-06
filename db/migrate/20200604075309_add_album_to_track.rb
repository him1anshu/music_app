class AddAlbumToTrack < ActiveRecord::Migration[6.0]
  def change
    add_reference :tracks, :album, null: false, foreign_key: true
  end
end
