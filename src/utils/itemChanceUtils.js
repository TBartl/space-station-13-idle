function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function addToReturn(toReturn, itemId, count) {
	if (!toReturn[itemId]) {
		toReturn[itemId] = count;
	} else {
		toReturn[itemId] += count;
	}
}

// Returns an object of key/values containing itemId/count
export function acquireItemFrom(data, toReturn = {}) {
	if (data.item) {
		addToReturn(toReturn, data.item, 1);
	}
	else if (data.items) {
		if (data.items.id == undefined) return;
		let count = data.items.count;
		if (!count) count = 1;
		if (typeof count != "number") {
			count = randomIntFromInterval(count[0], count[1]);
		}
		addToReturn(toReturn, data.items.id, count);
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
				acquireItemFrom({ items: subData }, toReturn);
				break;
			}
		}
	}
	else if (data.itemTables) {
		for (let subData of data.itemTables) {
			if (Math.random() < subData.chance) {
				acquireItemFrom(subData, toReturn);
			}
		}
	}
	return toReturn;
} 