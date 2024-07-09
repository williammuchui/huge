import {Link} from "react-router-dom";

export function NoPage(){
return (<>
    <h2>Page Not found</h2>
    <span>Go Back to <Link to="/home" >Home</Link> Page</span>
</>
)
}
