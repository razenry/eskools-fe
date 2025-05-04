"use client";
import AttendanceTab from '@/components/dashboard/ AttendanceTab';
import Tabs from '@/components/dashboard/ Tabs';
import BottomNav from '@/components/dashboard/BottomNav';
import ClubTab from '@/components/dashboard/ClubTab';
import Header from '@/components/dashboard/Header';
import SettingsTab from '@/components/dashboard/SettingsTab';
import UserProfile from '@/components/dashboard/UserProfile';
import { User } from '@/types/User';
import { useState } from 'react';


const Dashboard = ({ user }: { user?: User }) => {
  const [activeTab, setActiveTab] = useState('absensi');

  // Data dummy
  const recentActivities = [
    { id: 1, name: "Basket", time: "15:30", date: "12 Mei 2023", status: "Hadir" },
    { id: 2, name: "Pramuka", time: "14:00", date: "10 Mei 2023", status: "Hadir" },
    { id: 3, name: "Robotics", time: "16:45", date: "8 Mei 2023", status: "Alpa" },
  ];

  const clubs = [
    { id: 1, name: "Basket", schedule: "Senin & Kamis", members: 24 },
    { id: 2, name: "Pramuka", schedule: "Selasa & Jumat", members: 32 },
    { id: 3, name: "Robotics", schedule: "Rabu", members: 15 },
    { id: 4, name: "Paskibra", schedule: "Rabu", members: 15 },
  ];

   // Safely access user data with fallbacks
   const userName = user?.data?.data?.name || "Guest";
   const userEmail = user?.data?.data?.email || "No email provided";

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <UserProfile name={userName} email={userEmail} />

      <main className="container mx-auto p-4">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'absensi' && (
          <AttendanceTab clubs={clubs} activities={recentActivities} />
        )}

        {activeTab === 'eskul' && (
          <ClubTab clubs={clubs} />
        )}

        {activeTab === 'pengaturan' && (
          <SettingsTab />
        )}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="pb-16"></div>
    </div>
  );
};

export default Dashboard;

