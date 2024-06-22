import React from 'react';
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>O</Avatar>
          oga_ocean . <span>12h</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src="a82c4b062593c35f4ebcf1617e83cacd.jpg" alt="" />
      </div>
      <div className="post__footer">
        <div className="post_footerIcons">
          <div className="post_iconsMain">
            <FavouriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post_iconsSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
