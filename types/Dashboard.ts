export interface Activity {
  id: string;
  name: string;
  date: string;
  time: string;
  status: 'Hadir' | 'Tidak Hadir' | string;
}

export interface Club {
  id: string;
  name: string;
  schedule: string;
  members: number;
}

