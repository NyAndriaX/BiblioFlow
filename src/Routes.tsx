import { createBrowserRouter } from 'react-router-dom'
import NotFound from './views/NotFound'
import App from './App'

export const router = createBrowserRouter([  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: []}])