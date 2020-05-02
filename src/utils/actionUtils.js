const PROGRESS_INTERVAL = 0.03;

export function progressAction(duration, updateProgress, onFinish, progress = 0) {
	var from = new Date().getTime();
	var timeout = setTimeout(() => {
		// progress += PROGRESS_INTERVAL;
		var to = new Date().getTime();
		progress += (to - from) / 1000;

		if (progress >= duration) {
			onFinish();
			progressAction(duration, updateProgress, onFinish);
		} else {
			progressAction(duration, updateProgress, onFinish, progress);
		}
	}, PROGRESS_INTERVAL * 1000)

	updateProgress(progress, timeout);
}