import LogoutButton from "../auth/LogoutButton";
import SettingItem from "./SettingItem";


const SettingsTab = () => {
  const settings = [
    { 
      title: "Notifikasi", 
      description: "Aktifkan notifikasi", 
      hasToggle: true, 
      hasArrow: false, 
      isChecked: true 
    },
    { 
      title: "Bahasa", 
      description: "Indonesia", 
      hasToggle: false, 
      hasArrow: true 
    },
    { 
      title: "Ubah Password", 
      description: "Terakhir diubah 3 bulan lalu", 
      hasToggle: false, 
      hasArrow: true 
    },
    { 
      title: "Pusat Bantuan", 
      description: "Panduan penggunaan aplikasi", 
      hasToggle: false, 
      hasArrow: true 
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-bold text-lg mb-4">Pengaturan</h2>
      <div className="space-y-4">
        {settings.map((setting, index) => (
          <SettingItem key={index} {...setting} />
        ))}
        <LogoutButton/>
      </div>
    </div>
  );
};

export default SettingsTab;