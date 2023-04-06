import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MemoIconReply from "../../assets/icons/IconReply";
import { Comments } from "../../styles/CommentStyles";
import MemoIconEdit from "../../assets/icons/IconEdit";
import MemoIconDelete from "../../assets/icons/IconDelete";
import { CommentInput, ReplayButton } from "../../styles/CommentStyles";
import CommentReplies from "./CommentReplies";
import CommentDeleteDialogBox from "./CommentDeleteDialogBox";

const CountSection = styled.div`
  display: flex;
  align-items: center;
  background: #f5f6fa;
  margin: 15px;
  flex-direction: column;
  width: 50px;
  border-radius: 8px;
  height: 80px;
`;

const Sign = styled.span`
  color: #696cae;
  font-size: 18px;
  font-weight: 600;
`;

const Comment = styled.li`
  margin-bottom: 5px;
  padding: 15px;
  padding-left: 0;
  color: #8e9198;
  width: 100%;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentAuthor = styled.div`
  flex-wrap: wrap;
  align-content: center;
  display: flex;
`;

const ReplaySection = styled.span`
  color: #5358b6;
  font-size: 13px;
  cursor: pointer;
  .icon {
    padding-right: 3px;
  }
  &:hover {
    color: #dadbe6;
  }
`;

const Button = styled.span`
  color: #5358b6;
  font-size: 13px;
  cursor: pointer;
  .icon {
    padding-right: 3px;
  }
  &:hover {
    background: #dadbe6;
  }
`;
const CommentContent = styled.p`
  margin-top: 0.5rem;
`;
const Text = styled.span`
  background: #565baa;
  color: #dadff7;
  padding: 3px;
  padding-top: 0px;
`;
const CommentUser = styled.span`
  color: #505860;
  font-weight: bold;
  padding-left: 8px;
`;
const CommentCard = ({key, data, currentUser,onAddReply }) => {
  const [editedComment, setEditedComment] = useState(null);
  const [isEdit, setEdited] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showReply, setShowReply] = useState(false);

  return (
    <>
      <Comments>
        <CountSection>
          <Sign>+</Sign>
          {data?.score}
          <Sign>-</Sign>
        </CountSection>
        <Comment>
          <CommentHeader>
            <CommentAuthor>
              <img
                src={data.user?.image.webp}
                style={{ width: "10%", height: "10%" }}
              />
              <CommentUser>
                {" "}
                {data.user?.username}{" "}
                {currentUser === data.user?.username ? <Text>you</Text> : <></>}
              </CommentUser>
              <span style={{ paddingLeft: "5px" }}> {data.createdAt}</span>
            </CommentAuthor>

            {currentUser === data.user?.username ? (
              <div>
                <Button
                  style={{ color: "red", paddingRight: "3px" }}
                  onClick={() => setShowDialog(true)}
                >
                  <MemoIconDelete className="icon" />
                  Delete{" "}
                </Button>

                <Button onClick={() => setEdited(true)}>
                  {" "}
                  <MemoIconEdit className="icon" /> Edit
                </Button>
              </div>
            ) : (
              <ReplaySection onClick={() => setShowReply(true)}>
                <MemoIconReply className="icon" />
                Reply
              </ReplaySection>
            )}
          </CommentHeader>

          {currentUser === data.user?.username && isEdit ? (
            <CommentContent>
              <CommentInput>{data.content}</CommentInput>
              <ReplayButton
                style={{ marginLeft: "88%" }}
                onClick={() => setEdited(false)}
              >
                UPDATE
              </ReplayButton>
            </CommentContent>
          ) : (
            <CommentContent>{data.content}</CommentContent>
          )}
        </Comment>
      </Comments>
      {showReply && <CommentReplies setShowReply={setShowReply}  onAddReply={onAddReply} />}
      {showDialog && (
        <CommentDeleteDialogBox
        setShowDialog={setShowDialog}
          heading="Delete Comment"
          message="Are you sure you want to delete this comment? This will remove comment and cant be undone."
        />
      )}
    </>
  );
};

export default CommentCard;
