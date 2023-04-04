import * as React from "react";

function IconReply(props) {
  return (
    <svg width="1em" height="1em" {...props}>
      <path
        d="M.227 4.316L5.04.16a.657.657 0 011.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 010-.993z"
        fill="#5357B6"
      />
    </svg>
  );
}

const MemoIconReply = React.memo(IconReply);
export default MemoIconReply;
