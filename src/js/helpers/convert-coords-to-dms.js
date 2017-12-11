function toDegreesMinutesAndSeconds(coordinate) {
	const absolute = Math.abs(coordinate);
	const degrees = Math.floor(absolute);
	const minutesNotTruncated = (absolute - degrees) * 60;
	const minutes = Math.floor(minutesNotTruncated);
	const seconds = Math.floor((minutesNotTruncated - minutes) * 60);
	return `${degrees}°${minutes}'${seconds}"`;
}

export function convertDMS(lat, lng) {
	const latitude = toDegreesMinutesAndSeconds(lat);
	const latitudeCardinal = Math.sign(lat) >= 0 ? "N" : "S";
	const longitude = toDegreesMinutesAndSeconds(lng);
	const longitudeCardinal = Math.sign(lng) >= 0 ? "E" : "W";
	return `${latitude}${latitudeCardinal}+${longitude}${longitudeCardinal}`;
}