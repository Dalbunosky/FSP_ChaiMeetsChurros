json.extract! meetup, :id, :location, :starttime, :capacity, :host_id, :topic, :guests


# json.extract! meetup, :id, :date, :address, :host_id, :city_id, :guest_ids
# json.host_name meetup.host.username
# json.host_thumb asset_path(meetup.host.image.url(:thumb))