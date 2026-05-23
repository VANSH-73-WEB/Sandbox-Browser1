function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-slate-900 p-4 rounded">
          Project 1
        </div>

        <div className="bg-slate-900 p-4 rounded">
          Project 2
        </div>
      </div>
    </div>
  );
}

export default Dashboard;