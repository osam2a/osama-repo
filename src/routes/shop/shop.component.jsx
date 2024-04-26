import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categoriesPreview/CategoriesPreview.component';
import Category from '../category/Category.component';
import Err from '../err/ErrorPage';
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} Error={<Err />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
