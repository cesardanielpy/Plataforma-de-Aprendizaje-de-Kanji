import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import FormKanji from "../pages/kanjis/FormKanji";
import ListKanji from "../pages/kanjis/ListKanji";
import ShowKanji from "../pages/kanjis/ShowKanji";
import TextShpere from "../pages/TextShpere";
import NotFound from "../pages/NotFound";
import EditKanji from "../pages/kanjis/EditKanji";
import ContactPage from "../Layout/ContactPage";
import KanjiAdd from "../Layout/KanjiAdd";
import LoginPage from "../Auth/LoginPage";
import RegisterPage from "../Auth/RegisterPage";
import Instrucciones from "../Layout/Instrucciones";


export default createBrowserRouter ([
    {
        path:'/',
        element: <Layout/>,
        errorElement:<NotFound/>,
        children:[
            {
                index:true,
                element:<TextShpere/>
            }
            ,
            {
                path:'/kanji/instrucciones',
                element:
                <Instrucciones/>
            },
            {
                path:'/kanji/:id',
                element:
                <ShowKanji/>
            },
            {
                path:'/kanji/form',
                element:<FormKanji/>
            },
            {
                path:'/kanji/list',
                element:<ListKanji/>
            }
            ,
            {
                path:'/kanji/:id/edit',
                element:
                        <EditKanji/>
            }
            ,
            {
                path:'/kanji/contact',
                element:<ContactPage/>
            }
            ,
            {
                path:'/kanji/add',
                element:<KanjiAdd/>
            },
            {
                path:'/kanji/login',
                element:<LoginPage/>
            },
            {
                path:'/kanji/register',
                element:<RegisterPage/>
            }
            
            
            
        ]
    }
])