import { Club } from "@/types/Dashboard";
import ClubCard from "./ClubCard";

interface ClubProps {
  clubs: Club[];
}

const ClubTab = ({ clubs }: ClubProps) => {
  const handleDetail = (clubId: string | number) => {
    console.log(`Detail club ${clubId}`);
  };

  const handleLeave = (clubId: string | number) => {
    console.log(`Keluar dari club ${clubId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-bold text-lg mb-4">Eskul Saya</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clubs.map((club) => (
          <ClubCard
            key={club.id}
            club={club}
            onDetail={() => handleDetail(club.id)}
            onLeave={() => handleLeave(club.id)}
          />
        ))}
        <div className="border-2 border-dashed rounded-lg p-4 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <button className="text-blue-600 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Tambah Eskul
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClubTab;
