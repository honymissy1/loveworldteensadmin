import '../assets/styles/post.css';
import PostForm from '../components/postForm';
// import { Input } from 'antd';



const Post = () =>{
    return (
        <>
         <div className='banner'>Banner</div>
         <h2>Post Articles</h2>

         <div className="post-content">
            <div className="left">
             {/* <Input placeholder="Enter your name" /> */}
              <PostForm />
            </div>
            <div className="right"></div>
         </div>
        </>
    )
}

export default Post