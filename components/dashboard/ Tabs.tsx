const Tabs = ({ activeTab, setActiveTab } : { activeTab: string, setActiveTab: (tab: string) => void }) => {
    const tabs = [
      { id: 'absensi', label: 'Absensi' },
      { id: 'eskul', label: 'Eskul Saya' },
      { id: 'pengaturan', label: 'Pengaturan' }
    ];
  
    return (
      <div className="flex border-b mb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-medium ${activeTab === tab.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  };
  
  export default Tabs;