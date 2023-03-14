import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import FormKanji from "../pages/kanjis/FormKanji";
import ListKanji from "../pages/kanjis/ListKanji";
import ShowKanji from "../pages/kanjis/ShowKanji";
import TextShpere from "../pages/TextShpere";
import NotFound from "../pages/NotFound";
import Introduccion from "../pages/contenidod/Introduccion";
import RazonesDeEstudio from "../pages/contenidod/RazonesDeEstudio";

export default createBrowserRouter ([
    {
        path:'/',
        element: <Layout/>,
        errorElement:<NotFound/>,
        children:[
            {
                index:true,
                element:<TextShpere/>
            },
            {
                path:'/kanji/:id',
                element:<ShowKanji/>
            },
            {
                path:'/kanji/form',
                element:<FormKanji/>
            },
            {
                path:'/kanji/list',
                element:<ListKanji/>
            },
            {
                path:'/kanji/intro',
                element:<Introduccion/>
            },
            {
                path:'/kanji/intro/1',
                element:<RazonesDeEstudio/>
            }
            
            
            
        ]
    }
])