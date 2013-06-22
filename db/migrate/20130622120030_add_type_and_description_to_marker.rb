class AddTypeAndDescriptionToMarker < ActiveRecord::Migration
  def change
    add_column :markers, :marker_type, :string
    add_column :markers, :description, :string
  end
end