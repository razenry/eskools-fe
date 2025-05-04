import { Activity } from "@/types/Dashboard";

const ActivityItem = ({ activity }:{activity: Activity}) => {
    return (
      <div className="flex justify-between items-center p-2 border-b">
        <div>
          <p className="font-medium">{activity.name}</p>
          <p className="text-sm text-gray-500">{activity.date} • {activity.time}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          activity.status === 'Hadir' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {activity.status}
        </span>
      </div>
    );
  };
  
  export default ActivityItem;