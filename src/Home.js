import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
        if (! res.ok) {
            throw Error('could not fetch data from that resource');
        }
        return res.json();
    })
    .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
    })
    .catch(err => {
        setIsPending(false);
        setError(err.message);
        })
  }, []);
  //[] is dependency, it fires when name is changed

  return (
    <div className="home">
        { error && <div> {error} </div>}
        { isPending && <div>is Loading ... </div>}
        { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
    </div>
  );
}
 
export default Home;
