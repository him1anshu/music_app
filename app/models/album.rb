class Album < ApplicationRecord
	
	has_many :tracks
	has_one_attached :thumbnail

end
