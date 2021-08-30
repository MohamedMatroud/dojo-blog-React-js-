import {useParams,useHistory} from 'react-router-dom'
import useFetch from './useFetch';


const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory('');
    const  {data:blog , isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const handelDelete = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts' + blog.id, {
            method: "DELETE"
        }).then(() =>{
            history.push('/');
        
        })
    }
    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading......</div>}
        {blog && (<article >
        <h2>{blog.title}</h2>
        <p>Written by {blog.body}</p>
           <button onClick={handelDelete}>delete blog</button> 

        
            </article>
            )}  
           </div>
    );
}
 
export default BlogDetails;