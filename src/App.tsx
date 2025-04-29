import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is the homepage.</p>
      <p>
        <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default App;
