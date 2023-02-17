import React from "react";

function Response(props) {
  return (
    <div className="note">
      <h5>{props.content.prompt}</h5>
      <p>
        {props.content.response1} ({props.content.response1.length - 3})
      </p>
      <p>
        {props.content.response2} ({props.content.response2.length - 3})
      </p>
      <p>
        {props.content.response3} ({props.content.response3.length - 4})
      </p>
      <p>
        {props.content.response4} ({props.content.response4.length - 4})
      </p>
      <p>
        {props.content.response5} ({props.content.response5.length - 3})
      </p>
    </div>
  );
}

export default Response;
