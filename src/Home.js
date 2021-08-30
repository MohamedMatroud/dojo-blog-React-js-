import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
const  {data :blogs, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts');

//    [
//     {title: 'My new website', body: 'lorem ipsum...',author:'mario',id:1},
//     {title: 'Welcome party', body: 'lorem ipsum...',author:'mat',id:2},
//     {title: 'Web dev top tips new website', body: 'lorem ipsum...',author:'mario',id:3}
// ]
//    const [name,setName] = useState('matroud')
  
  //  const handelDelete = (id) =>{
  //    const newBlogs = blogs.filter(blog => blog.id !== id);
  //    setData(newBlogs)
  //  }
  
    return (
        <div className="home">
             {error && <div>{error}</div>}
            {isPending && <div>Loading......</div>}
        {blogs &&<BlogList blogs={blogs} title="All Blogs!"/>}  
        {/* <BlogList blogs={blogs.filter((blog) =>blog.author === 'mario')} title="mario's  Blogs!"/>    */}
        </div>
       
    );
}
 
export default Home;
