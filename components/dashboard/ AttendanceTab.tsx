import { Activity, Club } from '@/types/Dashboard';
import ActivityItem from './ActivityItem';


interface AttendanceTabProps {
  clubs: Club[];
  activities: Activity[];
}

const AttendanceTab = ({ clubs, activities } : AttendanceTabProps) => {
  const handleAbsen = (clubId: string) => {
    console.log(`Absen untuk club ${clubId}`);
    // Implementasi absen
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h2 className="font-bold text-lg mb-2">Absensi Hari Ini</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {clubs.map((club:Club) => (
            <div key={club.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
              <h3 className="font-semibold">{club.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{club.schedule}</p>
              <button 
                onClick={() => handleAbsen(club.id)}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Absen Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-bold text-lg mb-2">Aktivitas Terakhir</h2>
        <div className="space-y-3">
          {activities.map((activity:Activity, index:number) => (
            <ActivityItem key={index} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceTab;