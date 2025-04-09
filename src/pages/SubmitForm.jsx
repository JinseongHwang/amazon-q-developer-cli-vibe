import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubmitForm.css';

function SubmitForm({ addSubmission }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    speakerName: '',
    email: '',
    phone: '',
    category: '',
    duration: '30',
    abstract: '',
    experience: '',
    additionalInfo: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // 입력 시 해당 필드의 에러 메시지 제거
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = '강연 제목을 입력해주세요';
    }
    
    if (!formData.speakerName.trim()) {
      newErrors.speakerName = '강연자 이름을 입력해주세요';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '유효한 이메일 주소를 입력해주세요';
    }
    
    if (!formData.category) {
      newErrors.category = '카테고리를 선택해주세요';
    }
    
    if (!formData.abstract.trim()) {
      newErrors.abstract = '강연 개요를 입력해주세요';
    } else if (formData.abstract.length < 50) {
      newErrors.abstract = '강연 개요는 최소 50자 이상 입력해주세요';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // 제출 데이터 처리 및 저장
      const submissionId = addSubmission(formData);
      
      // 성공 시 상세 페이지로 이동
      navigate(`/submissions/${submissionId}`);
    } catch (error) {
      console.error('제출 중 오류가 발생했습니다:', error);
      setErrors({
        form: '제출 중 오류가 발생했습니다. 다시 시도해주세요.'
      });
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="submit-form-page">
      <div className="container">
        <h1>강연 제안하기</h1>
        <p className="form-description">
          아래 양식을 작성하여 강연을 제안해주세요. 모든 제안은 검토 후 연락드립니다.
        </p>
        
        {errors.form && <div className="error-message">{errors.form}</div>}
        
        <form className="submission-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>강연 정보</h2>
            
            <div className="form-group">
              <label htmlFor="title">강연 제목 *</label>
              <input
                type="text"
                id="title"
                name="title"
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                value={formData.title}
                onChange={handleChange}
                placeholder="강연의 제목을 입력해주세요"
              />
              {errors.title && <div className="error">{errors.title}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="category">카테고리 *</label>
              <select
                id="category"
                name="category"
                className={`form-control ${errors.category ? 'is-invalid' : ''}`}
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">카테고리 선택</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && <div className="error">{errors.category}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="duration">예상 강연 시간 *</label>
              <select
                id="duration"
                name="duration"
                className="form-control"
                value={formData.duration}
                onChange={handleChange}
              >
                <option value="30">30분</option>
                <option value="45">45분</option>
                <option value="60">60분</option>
                <option value="90">90분</option>
                <option value="120">120분</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="abstract">강연 개요 *</label>
              <textarea
                id="abstract"
                name="abstract"
                className={`form-control ${errors.abstract ? 'is-invalid' : ''}`}
                value={formData.abstract}
                onChange={handleChange}
                placeholder="강연의 주요 내용과 참가자들이 얻을 수 있는 가치에 대해 설명해주세요"
                rows="6"
              ></textarea>
              {errors.abstract && <div className="error">{errors.abstract}</div>}
              <div className="char-count">
                {formData.abstract.length} / 최소 50자
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h2>강연자 정보</h2>
            
            <div className="form-group">
              <label htmlFor="speakerName">이름 *</label>
              <input
                type="text"
                id="speakerName"
                name="speakerName"
                className={`form-control ${errors.speakerName ? 'is-invalid' : ''}`}
                value={formData.speakerName}
                onChange={handleChange}
                placeholder="강연자 이름을 입력해주세요"
              />
              {errors.speakerName && <div className="error">{errors.speakerName}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">이메일 *</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={formData.email}
                onChange={handleChange}
                placeholder="연락 가능한 이메일 주소를 입력해주세요"
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">연락처</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                placeholder="연락 가능한 전화번호를 입력해주세요 (선택사항)"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="experience">관련 경험</label>
              <textarea
                id="experience"
                name="experience"
                className="form-control"
                value={formData.experience}
                onChange={handleChange}
                placeholder="해당 주제와 관련된 경험이나 전문성을 간략히 설명해주세요 (선택사항)"
                rows="4"
              ></textarea>
            </div>
          </div>
          
          <div className="form-section">
            <h2>추가 정보</h2>
            
            <div className="form-group">
              <label htmlFor="additionalInfo">기타 참고사항</label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                className="form-control"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="강연에 필요한 장비나 기타 요청사항이 있으면 입력해주세요 (선택사항)"
                rows="4"
              ></textarea>
            </div>
          </div>
          
          <div className="form-actions">
            <button 
              type="submit" 
              className="btn btn-primary submit-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? '제출 중...' : '강연 제안하기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubmitForm;
