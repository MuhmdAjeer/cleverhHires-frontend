import './feed.scss'
import Share from '../Share/Share'
import Post from '../Post/Post'



function Feed() {
  return (
    <div className='feed'>
        <div className="feed_wrapper">
            <Share/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
  )
}

export default Feed