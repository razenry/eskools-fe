const ClubCard = ({ club, onDetail, onLeave }:{ club: any, onDetail: () => void, onLeave: () => void }) => {
    return (
      <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
        <h3 className="font-semibold text-lg mb-2">{club.name}</h3>
        <p className="text-gray-600 mb-1">Jadwal: {club.schedule}</p>
        <p className="text-gray-600 mb-3">Anggota: {club.members} siswa</p>
        <div className="flex space-x-2">
          <button 
            onClick={onDetail}
            className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
          >
            Detail
          </button>
          <button 
            onClick={onLeave}
            className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors text-sm"
          >
            Keluar
          </button>
        </div>
      </div>
    );
  };
  
  export default ClubCard;