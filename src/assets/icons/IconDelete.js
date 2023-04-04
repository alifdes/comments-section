import * as React from "react";

function IconDelete(props) {
  return (
    <svg width="1em" height="1em" {...props}>
      <path
        d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167z"
        fill="#ED6368"
      />
    </svg>
  );
}

const MemoIconDelete = React.memo(IconDelete);
export default MemoIconDelete;
