import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      method: 'GET',
      credentials: 'include', // Ustawienie credentials na 'include' przekazuje ciasteczka sesji
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error: ${response.status}`);
        }
      })
      .then(userInfo => {
        setUsername(userInfo.username);
      })
      .catch(error => {
        console.error('Profile fetch error:', error);
        // Jeśli sesja wygasła lub użytkownik nie jest zalogowany, możesz przekierować na stronę logowania
        navigate('/login');
      });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      method: 'POST',
      credentials: 'include',
    })
      .then(() => {
        setUsername(null);
        navigate('/login');
      })
      .catch(error => console.error('Logout error:', error));
  }

  return (
    <header className="flex text-[grey] text-[20px] px-10 pt-5 justify-end">
      <nav>
        {username && (
          <>
            <Link to="/profile" className="mr-10">
              My profile
            </Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="mx-5">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
