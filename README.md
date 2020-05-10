# Space Station 13 Idle

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### How to add a new job
1. Create and populate job data, items, and actions in a new file under the `src/data/` folder
2. Add the job in the `src/data/jobs.js` file
3. Create a module for the job in a new file under the `src/state/`
4. Add the job module in the `src/state/store.js` file. Note that it must be added as both a module and in the initial state
5. Add a new content file for the job under `src/components/content/`
6. Add the new file in the `src/components/content/ContentWrapper.vue` file

### Understanding drop tables
There are multiple valid ways to make drop tables:

**A) As a string with just the itemId :** a single item of that type will always be dropped
```
item: 'iron'
```

**B) As an object with a static count:** a static number of that type will be dropped 
```
items: {
	id: 'iron',
	count: 2
}
```

**C) As an object with a range count:** any number of items between that range (inclusive) will be dropped
```
items: {
	id: 'iron',
	count: [0, 5]
}
```
**D) As multiple weighted objects in a list:** the higher the weight of the item, the more likely it is to drop. The weights do not need to add up to 100. Previous count syntax is also applicable, though not required. 
```
itemTable: [
	{
		id: "iron",
		count: [1, 3]
		weight: 6
	}, {
		id: "silver",
		count: 2
		weight: 2
	}, {
		id: "gold",
		weight: 1
	},
	{
		id: null
		weight: 1
	}
]
```

**E) As multiple lists of other combinations:** You can have more than one type of item drop by defining multiple item tables, each with their own chance.
```
itemTables: [
	{
		chance: 100,
		item: 'iron'
	},
	{
		chance 10,
		items: {
			id: 'silver',
			count: 0-2
		}
	},
	{
		chance: 1,
		itemTable: [
			{
				id: 'gold',
				weight: 3
			},
			{
				id: 'titanium',
				weight: 1
			}
		]
	}
]
```