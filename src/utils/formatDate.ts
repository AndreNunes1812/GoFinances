import { format } from 'date-fns';

const formatDate = (value: Date): string =>
  format(new Date(value), 'dd/MM/yyyy');

export default formatDate;
