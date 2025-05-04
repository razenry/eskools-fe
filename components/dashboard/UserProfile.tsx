const UserProfile = ({ name, email }: { name: string; email: string }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="container mx-auto flex items-center">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
          <span className="text-blue-600 font-bold">{initials}</span>
        </div>
        <div>
          <h1 className="font-bold">Selamat datang,</h1>
          <p className="text-lg font-semibold">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
