export function getClickHandler(onClick, onDoubleClick, delay) {
	const dblClickDelay = 250;
	let timeoutID = null;
	delay = delay || dblClickDelay;
	return function (event) {
		if (!timeoutID) {
			timeoutID = setTimeout(() => {
				onClick(event);
				timeoutID = null
			}, delay);
		} else {
			timeoutID = clearTimeout(timeoutID);
			onDoubleClick(event);
		}
	};
}