import "./Blogs.css";

export function Blogs(){
    const blogs = ["Blog 1", "Blog 2", "Blog 3", "Blog 4"];
    const content = "Velit. Donec auctor, nulla id laoreet volutpat, pede erat feugiat ante, auctor facilisis dui augue non turpis. Suspendisse mattis metus et justo. Aliquam erat volutpat. Suspendisse potenti. Nam hendrerit lorem commodo metus laoreet ullamcorper. Proin vel nunc a felis sollicitudin pretium. Maecenas in metus at mi mollis posuere. Quisque ac quam sed massa adipiscing rutrum. Vestibulum ipsum. Phasellus porta sapien. Maecenas venenatis tellus vel tellus. Aliquam aliquam dolor at justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi pretium purus a magna. Nullam dui tellus, blandit eu, facilisis non, pharetra consectetuer, leo. Maecenas sit amet ante.";
    return (<>
    <ul id="blogs-list">
    {blogs.map(blog=>
        <li key={blog}><details id="blog-details"><summary>{blog}</summary>{content}</details></li>
        )}
    </ul>
    </>
)
}
