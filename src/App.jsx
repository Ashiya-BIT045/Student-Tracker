import './App.css'
import Home from './Home'
import Error from './Error'
import Addstudent from './Addstudent'
import View from './View'
import Edit from './Edit'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router= createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    errorElement:<Error />
  },
  {
    path:'/Addstudent',
    element:<Addstudent />
  },
  {
    path:'/View/:id',
    element:<View />
  },
  {
    path:'/Edit/:id',
    element:<Edit />
  }
]);

function App() {
   

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
