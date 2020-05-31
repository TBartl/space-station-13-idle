import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';

const validhunting = merge(cloneDeep(jobBase), {
	state: {
		targets: [
			{
				enemyId: 'mouse',
				count: 10
			},
			{
				enemyId: 'mouse',
				count: 20
			},
			{
				enemyId: 'mouse',
				count: 30
			}
		]
	},
	getters: {
		targets(state) {
			return state.targets;
		}
	}
});

export default validhunting;