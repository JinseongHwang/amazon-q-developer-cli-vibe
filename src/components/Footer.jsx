import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; {currentYear} Call for Content. 모든 권리 보유.</p>
          <div className="footer-links">
            <a href="#" className="footer-link">이용약관</a>
            <a href="#" className="footer-link">개인정보처리방침</a>
            <a href="#" className="footer-link">문의하기</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
