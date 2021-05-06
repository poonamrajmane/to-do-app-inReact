import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


const App =  () =>{
return (
<div className="ui container comments">
  <ApprovalCard>
<CommentDetail author="Poonam" timeAgo="Today at 4.00 PM" comment="Nice Blog!!!" imgg={faker.image.avatar()}/>
</ApprovalCard>
<ApprovalCard>
<CommentDetail author="Omkar" timeAgo="Today at 5.00 PM" comment="Imformative Blog!!!" imgg={faker.image.avatar()}/>
</ApprovalCard>
<ApprovalCard>
<CommentDetail author="Rohit" timeAgo="Today at 3.00 PM" comment="Nice Blog!!!" imgg={faker.image.avatar()}/>
</ApprovalCard>

</div>
);
};


ReactDOM.render(
  
    <App />
  ,
  document.getElementById('root')
);


