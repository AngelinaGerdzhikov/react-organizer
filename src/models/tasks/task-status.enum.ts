export type TaskStatus = {
  id: number,
  title: string
};

export enum TaskStatusTitle {
  'TO_DO' = 'TO_DO',
  'IN_PROGRESS' = 'IN_PROGRESS',
  'COMPLETED' = 'COMPLETED',
  'CANCELLED' = 'CANCELLED',
  'MIGRATED' = 'MIGRATED'
};