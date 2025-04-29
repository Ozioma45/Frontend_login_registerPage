import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const googleToken = urlParams.get("token");
    if (googleToken) {
      localStorage.setItem("token", googleToken);
      navigate("/dashboard"); // clean URL
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Your Token: {token}</p>
    </div>
  );
};

export default Dashboard;
