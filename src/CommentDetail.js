import react from "react";
import faker from "faker";

const Commentdetail = (props)=>{
  console.log("Props contains "+props);
return (

<div className="ui container comments">
<div className="comment">
<a href="/" className="avatar">
<img alt="avatar" src={props.imgg}/>
</a>
<a href="/" className="author">
  {props.author}
</a>
<div className="metadata">
  <span className="date">{props.timeAgo}</span>
</div>
<div className="Text">{props.comment}</div>


</div>

</div>



);



};

export default Commentdetail;