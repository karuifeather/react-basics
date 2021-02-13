//  Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Loretta Young"
          timeAgo="Yesterday at 6:21 AM"
          avatarUrl="https://randomuser.me/api/portraits/women/95.jpg"
          content="That was an interesting post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Miguel Black"
          timeAgo="Today at 12:47 PM"
          avatarUrl="https://randomuser.me/api/portraits/men/94.jpg"
          content="Was it though? O_o"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Hannah Lowe"
          timeAgo="Today at 5:37 PM"
          avatarUrl="https://randomuser.me/api/portraits/women/39.jpg"
          content="Yeah! You bet!!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
