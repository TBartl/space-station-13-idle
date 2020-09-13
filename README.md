# Space Station Idle

Space Station Idle is a web-based idle game based on Melvor Idle, and set in the Space Station 13 universe.

There's very little public documentation on implementation right now.

If you want to contribute anyway, pull requests are open!

___

## Setup and Deployment

### Prerequsites

You will need Git Bash as well as Node.js installed.

If you do not already have Vue CLI installed, continue reading, otherwise skip to the next header.

To install Vue CLI, type the following into Git Bash:

```
npm install -g @vue/cli
```

If it appears frozen, let it run. It can take from just a minute to tens of minutes, depending on your system.


### Project setup

To prepare a local version of the game for testing, type the following:

```
npm install
```

To launch a hot-reloading copy of your repo, type the following: (You will also only need to run this command on subsequent launches of the live edit page.)

```
npm run serve
```


### Deploy To Github

First, edit `deployGit.sh` as well as `vue.config.js` with your repo address (You will only need to edit `vue.config.js` if you modify the name of the repo, such as cloning vs forking.)

Then, run the following to deploy to the `gh-pages` branch of your repo.

```
./deployGit.sh
```
! This requires admin access to the repository in your `deployGit.sh` file.

### Deploy to AWS
```
./deployAws.sh
```
! Requires a signed in AWS account, `aws configure`
___

## Implementation Information

TODO: Fill out with item items, actions, enemies, etc...

### How to add a new job
1. Create and populate job data and actions in a new file under the `src/data/` folder
2. Add the job in the `src/data/jobs.js` file
3. Create and populate new item data in a new file under the `src/data/items/` folder
4. Add the items in the `src/data/items.js` file
5. Create a module for the job in a new file under the `src/state/`
6. Add the job module in the `src/state/store.js` file. Note that it must be added as both a module and in the initial state
7. Add a new content file for the job under `src/components/content/`
8. Add the new file in the `src/components/content/ContentWrapper.vue` file

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
		count: [1, 3],
		weight: 6
	}, {
		id: "silver",
		count: 2,
		weight: 2
	}, {
		id: "gold",
		weight: 1
	},
	{
		id: null,
		weight: 1
	}
]
```

**E) As multiple lists of other combinations:** You can have more than one type of item drop by defining multiple item tables, each with their own chance.
```
itemTables: [
	{
		chance: 1,
		item: 'iron'
	},
	{
		chance: 0.1,
		items: {
			id: 'silver',
			count: [0, 2]
		}
	},
	{
		chance: 0.01,
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
