class ChartController < ApplicationController
	def index
		@markers_last_day = Marker.created_in_last_24_hours.all
	end
end
