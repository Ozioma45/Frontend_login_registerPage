import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Dashboard = ({ user, setUser }: { user: any, setUser: (user: any) => void }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const email = params.get('email');
    const name = params.get('name');

    if (token && email) {
      const newUser = { email, name };
      localStorage.setItem('user', JSON.stringify(newUser));
      localStorage.setItem('token', token);
      setUser(newUser);
      navigate('/dashboard', { replace: true });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Welcome {user?.name || "User"} 🚀</h1>
      <p>Email: {user?.email}</p>
      <button onClick={logout} style={{ marginTop: '2rem' }}>Logout</button>
    </div>
  );
};

export default Dashboard;
