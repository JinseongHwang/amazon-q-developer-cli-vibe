import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SubmitForm from './pages/SubmitForm';
import SubmissionsList from './pages/SubmissionsList';
import SubmissionDetails from './pages/SubmissionDetails';
import './App.css';

function App() {
  const [submissions, setSubmissions] = useState([]);

  const addSubmission = (newSubmission) => {
    // 새 제출에 고유 ID 부여
    const submissionWithId = {
      ...newSubmission,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString()
    };
    setSubmissions([...submissions, submissionWithId]);
    return submissionWithId.id;
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/submit" 
              element={<SubmitForm addSubmission={addSubmission} />} 
            />
            <Route 
              path="/submissions" 
              element={<SubmissionsList submissions={submissions} />} 
            />
            <Route 
              path="/submissions/:id" 
              element={<SubmissionDetails submissions={submissions} />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
