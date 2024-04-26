import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home.component';
import Navigation from './routes/navigation/navigation.component';
import About from './routes/about/About';
import Shop from './routes/shop/shop.component';
import Authentication from './authentication/authentication.component';
// import Cheackout from './routes/cheackout/Cheackout.page';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
{/*           <Route path='cheackout' element={<Cheackout />} /> */}
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
