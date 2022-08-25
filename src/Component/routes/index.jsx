import M404 from "../404/M404";
import Index from "../Index/Index";
import Login from "../Login/Login";
import SongSheet from "../SongSheet/Component/Index";


// eslint-disable-next-line
export default[
    {
        path:'/',
        element:<Login/>
    },{
        path:'/home',
        element:<Index/>
    },{
        path:'/songSheet',
        element:<SongSheet/>
    },{
        path:"*",
        element:<M404/>
    }
]


