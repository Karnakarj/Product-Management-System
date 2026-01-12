// Task structure
// Simple fields – easy ga maintain cheyachu
export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'inprogress' | 'done';
}
