import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';


const evasion = merge(cloneDeep(jobBase), {
});

export default evasion;