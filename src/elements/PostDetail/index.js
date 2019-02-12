import React from 'react';

import Label from '../Label';
import PostActions from '../PostActions';

import './PostDetail.scss';

const PostDetail = ({
  postTitleText,
  postDescriptionText,
  postTagText,
  commentAltText,
  commentIconSrc,
  commentCount,
  likeAltText,
  likeIconSrc,
  likeCount,
}) =>
  (
    <div className="post-detail">
      <Label
        classNames="post-title"
        text={postTitleText}
      />
      <Label
        classNames="post-description"
        text={postDescriptionText}
      />
      <Label
        classNames="post-tag"
        text={postTagText}
      />
      <div className="post-actions">
        <PostActions
          altText={commentAltText}
          iconSrc={commentIconSrc}
          text={commentCount}
        />
        <PostActions
          altText={likeAltText}
          iconSrc={likeIconSrc}
          text={likeCount}
        />
      </div>
    </div>
  )

export default PostDetail;