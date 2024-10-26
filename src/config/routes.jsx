import { createBrowserRouter } from  "react-router-dom";
import {Home, PostDetail, PostForm} from "../pages";
import { PostItem } from "../components";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/post-form',
        element: <PostForm />
    },
    {
        path: '/post-detail',
        element: <PostDetail />
    },
    //DEBUG
    {
        path: '/post-item',
        element: <PostItem 
            image='https://picsum.photos/800'
            title='image Title'
            name='Riki'
            date='18 Jul 2024'
            body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore officia ipsum accusantium, consequuntur animi ut. Incidunt adipisci, pariatur natus unde corporis aut expedita laudantium ducimus sequi quisquam? Dicta eum voluptatum vitae inventore praesentium, quod error voluptate, omnis odio iusto quas alias soluta quis? Veniam, officiis ullam repellat vel beatae reprehenderit.'
        />
    }
])