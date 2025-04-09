import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>강연자를 모집합니다</h1>
          <p>당신의 지식과 경험을 나눠주세요. 우리는 다양한 주제의 강연을 기다리고 있습니다.</p>
          <div className="hero-buttons">
            <Link to="/submit" className="btn btn-primary">강연 제안하기</Link>
            <Link to="/submissions" className="btn btn-secondary">제안된 강연 보기</Link>
          </div>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2 className="section-title">왜 강연을 제안해야 할까요?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🎤</div>
              <h3>지식 공유</h3>
              <p>당신의 전문 지식과 경험을 다른 사람들과 공유하세요.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>네트워킹</h3>
              <p>같은 관심사를 가진 사람들과 연결되고 네트워크를 확장하세요.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>경력 발전</h3>
              <p>강연 경험은 당신의 이력서를 빛나게 만들어 줍니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>영감 제공</h3>
              <p>당신의 이야기가 누군가에게 영감을 줄 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="container">
          <h2>지금 바로 강연을 제안하세요</h2>
          <p>여러분의 아이디어를 기다리고 있습니다.</p>
          <Link to="/submit" className="btn btn-primary">강연 제안하기</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
