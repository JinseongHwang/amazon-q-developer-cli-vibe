import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">Call for Content</Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">홈</Link>
            </li>
            <li className="nav-item">
              <Link to="/submit" className="nav-link">강연 제안하기</Link>
            </li>
            <li className="nav-item">
              <Link to="/submissions" className="nav-link">제안 목록</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
