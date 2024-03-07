import { Routes, Route } from 'react-router-dom';
import ErrorPage from './routes/err/ErrorPage';
import Header from './routes/header/Header.component';
import Navigation from './routes/navigation/navigation.component';
import About from './routes/about/About';
import Home from './routes/home/home.component';
import Authentication from './authentication/authentication.component';

import './App.css';

const once = (func) => {
  let stuts = false;
  return (...data) => {
    if (!stuts) {
      stuts = true;
      func(...data);
    }
  };
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route
            index={true}
            element={<Header />}
            errorElement={<ErrorPage />}
          />
          <Route path='home' element={<Home />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
