import { ProjectStatusType } from '@/app/project/types';

const getButtonStatusVariant = (status: ProjectStatusType) => {
  switch (status) {
    case 'Completed':
      return 'default';
    case 'In Progress':
      return 'secondary';
    default:
      return 'outline';
  }
};

export default getButtonStatusVariant;
