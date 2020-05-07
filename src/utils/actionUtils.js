const PROGRESS_INTERVAL = 0.025;

export function progressAction(duration, rootGetters, updateProgress, onFinish, progress = 0) {
	var from = new Date().getTime();
	var timeout = setTimeout(() => {
		// progress += PROGRESS_INTERVAL;
		var to = new Date().getTime();
		progress += (to - from) / 1000 * rootGetters.chronoSpeed;

		if (progress >= duration) {
			onFinish();
			progressAction(duration, rootGetters, updateProgress, onFinish);
		} else {
			progressAction(duration, rootGetters, updateProgress, onFinish, progress);
		}
	}, PROGRESS_INTERVAL * 1000)

	updateProgress(progress, timeout);
}