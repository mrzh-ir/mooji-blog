// props is a way to pass the data from parent component to child component
const BlogList = ( {blogs, title, handleDelete}) => {
    return ( 
        <div className="blog-list">
        <h2> { title } </h2>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2> {blog.title} </h2>
                <p> Written by {blog.author} </p>
                <button onClick={() => handleDelete(blog.id)}> delete blogs</button>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;