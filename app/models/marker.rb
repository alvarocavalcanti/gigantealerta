class Marker < ActiveRecord::Base
  attr_accessible :latitude, :longitude

  validates_presence_of :latitude
  validates_presence_of :longitude
end
