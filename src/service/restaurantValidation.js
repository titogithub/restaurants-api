module.exports = {
	attributes(entity) {
		const restaurant = {};
		if ('name' in entity) restaurant.name = entity.name;
		if ('kindOfRestaurant' in entity) restaurant.kindOfRestaurant = entity.kindOfRestaurant;
		if ('songs' in entity) restaurant.songs = entity.songs;
		return restaurant;
	}
}