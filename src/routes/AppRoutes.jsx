
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../Layout/MainLayout'
import Dashboard from '../pages/Dashboard'
import Questions from '../pages/Questions'
import CreateQuestion from '../pages/CreateQuestion'

const AppRoutes = () => {


    const router = createBrowserRouter([{

        path:"/", 
        element:<MainLayout/>,
        
        children:[{
            path:"",
            element:<Dashboard/>
        } ,

    {
         path:"/questions" , 

        element:<Questions/> 
    },
    {
        path:"/create",
        element:<CreateQuestion/>

    }
    
    
    ]

    }])


  return (

    <RouterProvider router = {router}/>
  )
}

export default AppRoutes