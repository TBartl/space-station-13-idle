import { cloneDeep, merge } from 'lodash';
import jobBase from '@/state/jobBase';


const precision = merge(cloneDeep(jobBase), {
});

export default precision;