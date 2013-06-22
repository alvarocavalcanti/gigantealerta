class Marker < ActiveRecord::Base
  attr_accessible :latitude, :longitude

  validates_presence_of :latitude
  validates_presence_of :longitude

  scope :created_in_last_30_minutes, where('created_at > ?', 31.minutes.ago)
end
