function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function quickCommit(commit, itemId, count) {
	commit("changeItemCount", { itemId, count }, { root: true });
}

export function acquireItemFrom(data, commit) {
	if (data.item) {
		quickCommit(commit, data.item, 1);
	}
	else if (data.items) {
		if (data.items.id == undefined) return;
		let count = data.items.count;
		if (!count) count = 1;
		if (typeof count != "number") {
			count = randomIntFromInterval(count[0], count[1]);
		}
		quickCommit(commit, data.items.id, count);
	}
	else if (data.itemTable) {
		let total = data.itemTable.reduce((total, subData) => {
			return total + subData.weight;
		}, 0);
		let val = Math.floor(Math.random() * total);
		let runningTotal = 0;
		for (let subData of data.itemTable) {
			runningTotal += subData.weight;
			if (runningTotal > val) {
				acquireItemFrom({ items: subData }, commit);
				return;
			}
		}
	}
	else if (data.itemTables) {
		for (let subData of data.itemTables) {
			if (Math.random() < subData.chance) {
				acquireItemFrom(subData, commit);
			}
		}
	}
} 