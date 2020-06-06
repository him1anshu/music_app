class Track < ApplicationRecord
	belongs_to :album
	has_one_attached :song
	has_one_attached :thumbnail

	# def self.search(search)
 #  	if search
 #    	track = Track.find_by(title: search)
 #  		if track
 #  			self.where(id: track)
 #  		else
 #  			@tracks = Track.all
 #  		end
 #  	else
 #    	@tracks = Track.all
 #  	end
	# end

end
