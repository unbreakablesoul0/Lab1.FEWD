import { useState } from "react";
import ProfileCard from "./Components/ProfileCard";
import StatusPanel from "./Components/StatusPanel";

function App() {
  // UI state managed by React (NOT direct DOM access)
  const [user, setUser] = useState({
    name: "Manoj",
    role: "Frontend Developer",
    status: "Active",
  });

  // State update triggers re-render & reconciliation
  const toggleStatus = () => {
    setUser((prevUser) => ({
      ...prevUser,
      status: prevUser.status === "Active" ? "Offline" : "Active",
    }));
  };

  return (
    <div className="app">
      <h1>Profile Dashboard</h1>

      {/* Passing data downward (Unidirectional Data Flow) */}
      <ProfileCard
        name={user.name}
        role={user.role}
      />

      <StatusPanel
        status={user.status}
        onToggle={toggleStatus}
      />
    </div>
  );
}

export default App;
