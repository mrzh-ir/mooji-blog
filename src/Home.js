import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);


  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
        return res.json();
    })
    .then(data => 
        setBlogs(data));
        setIsPending(false);
  }, []);
  //[] is dependency, it fires when name is changed

  return (
    <div className="home">
        { isPending && <div>is Loading ... </div>}
      { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
    </div>
  );
}
 
export default Home;
