import {Link} from 'react-router-dom'

const BlogList = ({blogs,title,handelDelete}) => {
//    const blogs = props.blogs,
//          title = props.title;
   
    return (
        <div className="blog-list">
            <h2>{title}</h2>
        {blogs.map((blog) =>(
    <div className="blog-preview" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
        <h2>{blog.title}</h2>
        <p>Written by {blog.body}</p></Link>
        
        {/* <button onClick={() =>handelDelete(blog.id)}>delete blog</button> */}

    </div>
        ))}
    </div>  
    );
}
 
export default BlogList;