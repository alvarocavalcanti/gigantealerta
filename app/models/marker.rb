class Marker < ActiveRecord::Base
  attr_accessible :latitude, :longitude, :marker_type, :description

  validates_presence_of :latitude
  validates_presence_of :longitude

  scope :created_in_last_30min, lambda { {:conditions => ["created_at > ?", 31.minutes.ago ] } }
  scope :created_in_last_24h, lambda { {:conditions => ["created_at > ?", 24.hours.ago ] } }
end
