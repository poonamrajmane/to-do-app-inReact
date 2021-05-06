import react from "react";

const ApprovalCard =(props)=>{
console.log(props.children);
    return(
        <div class="ui cards">
          <div class="card">
              <div className="extraContent">{props.children}</div>
            <div class="content">
             <div class="ui two buttons">
                 <div class="ui basic green button">Approve</div>
                <div class="ui basic red button">Decline</div>
             </div>

             
            </div>
          </div>
        </div>

    );

};

export default ApprovalCard;