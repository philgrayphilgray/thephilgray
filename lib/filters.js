import { format } from 'date-fns';
import slugify from 'slugify';

export const slugFilter = str =>
  slugify(str, { replacement: '-', lower: true, remove: /[$*_+~.()'"!\-:@]/g });

export const dateFilter = date => format(new Date(date), 'MMMM Do, YYYY');
