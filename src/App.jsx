import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/err/ErrorPage';
import Header from './routes/header/Header.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Test from './Test';
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
          <Route path='test' element={<Test />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
