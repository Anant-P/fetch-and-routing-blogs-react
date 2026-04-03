// Write your JS code here
import './index.css'
import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}}

  componentDidMount = () => {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
      id: data.id,
    }

    this.setState({blogItemDetails: updatedData})
  }

  render() {
    const {blogItemDetails} = this.state
    const {title, avatarUrl, author, topic, content, imageUrl} = blogItemDetails
    return (
      <div className="blog-details-container">
        <h1>{title}</h1>
        <div className="author-container">
          <img src={avatarUrl} alt="avatar" />
          <p>{author}</p>
        </div>
        <div className="blog-details-img-container">
          <img src={imageUrl} alt={title} />
        </div>
        <p>{content}</p>
        <p>{topic}</p>
      </div>
    )
  }
}

export default BlogItemDetails
