import './posts.scss'
import {posts} from '../../helpers/Data'
import { Link } from 'react-router-dom'
const Posts = () => {
  const lastTwoItems = posts.slice(-2);
  return (
      <div className='posts d-flex flex-wrap w-75'>
    {
        lastTwoItems.map((post,i)=>(
            <div className='p-3'>
                <Link className='text-decoration-none text-white' to={post.link} target='_blank'>
                <h2>{post.title}</h2>
                <p>{post.desc}</p>
                </Link> 
            </div>
        ))
    }
        
    </div>
  )
}

export default Posts