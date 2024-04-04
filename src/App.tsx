import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ProductDetail from './pages/productDetail'
import Login from './pages/login'
import Product from './pages/product'
import Post from './pages/postPage'
import Form from './pages/form'

const App = (): React.JSX.Element => {
  const [isLogin, setIsLogin] = React.useState<boolean>(true)

  const ProtectedRoute = () => {
    if (isLogin) return <Outlet />

    return <Navigate to={'/login'} />
  }

  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/product' element={<Product />} />
        <Route path='/post' element={<Post />} />
        <Route path='/product/detail/:id' element={<ProductDetail />} />
      </Route>


      <Route path='/login' element={<Login />} />
    </Routes>
  )
}



export default App