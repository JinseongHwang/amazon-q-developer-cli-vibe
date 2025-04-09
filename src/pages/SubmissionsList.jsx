import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SubmissionsList.css';

function SubmissionsList({ submissions }) {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    '기술/개발',
    '디자인',
    '마케팅',
    '비즈니스/창업',
    '커리어/자기계발',
    '예술/문화',
    '교육',
    '기타'
  ];
  
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredSubmissions = submissions.filter((submission) => {
    // 카테고리 필터링
    const categoryMatch = filter === 'all' || submission.category === filter;
    
    // 검색어 필터링
    const searchMatch = 
      submission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.speakerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && searchMatch;
  });
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  return (
    <div className="submissions-list-page">
      <div className="container">
        <h1>제안된 강연 목록</h1>
        
        <div className="filters">
          <div className="search-box">
            <input
              type="text"
              placeholder="제목, 강연자, 내용 검색..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          
          <div className="category-filter">
            <select 
              value={filter} 
              onChange={handleFilterChange}
              className="filter-select"
            >
              <option value="all">모든 카테고리</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {filteredSubmissions.length === 0 ? (
          <div className="no-submissions">
            <p>제안된 강연이 없습니다.</p>
            <Link to="/submit" className="btn btn-primary">
              강연 제안하기
            </Link>
          </div>
        ) : (
          <div className="submissions-grid">
            {filteredSubmissions.map((submission) => (
              <div key={submission.id} className="submission-card">
                <div className="submission-category">{submission.category}</div>
                <h3 className="submission-title">{submission.title}</h3>
                <div className="submission-speaker">
                  <span className="speaker-name">{submission.speakerName}</span>
                </div>
                <p className="submission-abstract">
                  {submission.abstract.length > 150
                    ? `${submission.abstract.substring(0, 150)}...`
                    : submission.abstract}
                </p>
                <div className="submission-meta">
                  <span className="submission-duration">{submission.duration}분</span>
                  <span className="submission-date">
                    {formatDate(submission.submittedAt)}
                  </span>
                </div>
                <Link 
                  to={`/submissions/${submission.id}`} 
                  className="btn btn-secondary view-details"
                >
                  상세 보기
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SubmissionsList;
