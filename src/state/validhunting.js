import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';

const validhunting = merge(cloneDeep(jobBase), {
});

export default validhunting;