require 'spec_helper'

describe Marker do
  it { should validate_presence_of(:latitude) }
  it { should validate_presence_of(:longitude) }
end
