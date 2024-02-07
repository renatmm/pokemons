import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;