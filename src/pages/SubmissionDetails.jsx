import { useParams, Link, useNavigate } from 'react-router-dom';
import './SubmissionDetails.css';

function SubmissionDetails({ submissions }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // ID로 제출 데이터 찾기
  const submission = submissions.find(sub => sub.id === id);
  
  // 제출 데이터가 없는 경우
  if (!submission) {
    return (
      <div className="submission-not-found">
        <div className="container">
          <h2>제안을 찾을 수 없습니다</h2>
          <p>요청하신 강연 제안을 찾을 수 없습니다.</p>
          <div className="actions">
            <Link to="/submissions" className="btn btn-primary">
              목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  return (
    <div className="submission-details-page">
      <div className="container">
        <div className="submission-header">
          <div className="submission-meta">
            <span className="submission-category">{submission.category}</span>
            <span className="submission-date">
              제안일: {formatDate(submission.submittedAt)}
            </span>
          </div>
          <h1>{submission.title}</h1>
          <div className="speaker-info">
            <div className="speaker-name">{submission.speakerName}</div>
            <div className="submission-duration">{submission.duration}분</div>
          </div>
        </div>
        
        <div className="submission-content">
          <div className="content-section">
            <h2>강연 개요</h2>
            <div className="abstract">
              {submission.abstract.split('\\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          {submission.experience && (
            <div className="content-section">
              <h2>강연자 경험</h2>
              <div className="experience">
                {submission.experience.split('\\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
          
          {submission.additionalInfo && (
            <div className="content-section">
              <h2>추가 정보</h2>
              <div className="additional-info">
                {submission.additionalInfo.split('\\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
          
          <div className="content-section contact-info">
            <h2>연락처 정보</h2>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">이메일:</span>
                <span className="contact-value">{submission.email}</span>
              </div>
              {submission.phone && (
                <div className="contact-item">
                  <span className="contact-label">전화번호:</span>
                  <span className="contact-value">{submission.phone}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="submission-actions">
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/submissions')}
          >
            목록으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubmissionDetails;
