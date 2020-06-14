import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';


const command = merge(cloneDeep(jobBase), {
});

export default command;