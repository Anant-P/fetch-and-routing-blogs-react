// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = ({blog}) => {
  const {id, author, avatarUrl, imageUrl, title, topic} = blog
  return (
    <Link className="list-link" to={`/blogs/${id}`}>
      <li className="blog-item-list">
        <div className="blog-item-left">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="blog-item-right">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt="avatar" />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
