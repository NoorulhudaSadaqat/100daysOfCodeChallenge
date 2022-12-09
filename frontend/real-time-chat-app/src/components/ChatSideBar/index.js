import React from "react";
//          Importing CSS Files
import "./style.css";
//          Importing Icons
import { FaSearch } from "react-icons/fa";
//          Importing Components
import Moment from "react-moment";
//          Importing Utils
// import { PIC_AMAZON_URL } from '../../utils/baseURLs';

const StudentPortalAllChatsComponent = ({ roomId, chats, joinRoom }) => {
  return (
    <div className="all-chats-Container">
      <div className="all-chats-align-input">
        <div className="all-chats-input-container">
          <input
            className="all-chats-input-field"
            type="search"
            placeholder="Type here to search contact"
          />
          <div className="all-chats-search-icon">
            <FaSearch color="#023047" size={19} />
          </div>
        </div>
      </div>
      <div className="all-chats-heading">All Chat</div>
      <div className="all-chats-scroll-container">
        {chats &&
          Array.isArray(chats) &&
          chats.length > 0 &&
          chats.map((chat) => (
            <div
              className="all-chats-users-chat-info-container"
              style={{
                backgroundColor:
                  chat?.tutor_student === roomId ? "#EFFAFF" : "#FFFFFF",
              }}
              key={chat.id}
              onClick={() => joinRoom(chat)}
            >
              <img
                className="all-chats-users-img"
                alt=""
                src={
                  chat.student && chat.student.avatar
                    ? `${PIC_AMAZON_URL}${chat.student.avatar}`
                    : chat.tutor && chat.tutor.avatar
                    ? `${PIC_AMAZON_URL}${chat.tutor.avatar}`
                    : "https://res.cloudinary.com/the-dev-corporate/image/upload/v1639993576/profile_chvfnf.png"
                }
              />
              <div className="all-chats-users-flex-main-container">
                <div className="all-chats-users-flex-container">
                  <div className="all-chats-user-name">
                    {chat.student
                      ? chat.student.firstName
                      : chat.tutor.firstName}
                  </div>
                  <div className="all-chats-user-time">
                    <Moment format="hh:mm">{chat.last_message.date}</Moment>
                  </div>
                </div>
                <div className="all-chats-users-flex-container">
                  <div className="all-chats-user-description">
                    {messages?.length > 0 &&
                    (chat.tutor_student === localStorage.getItem("room_id") ||
                      chat.tutor_student === localStorage.getItem("roomId"))
                      ? messages[messages?.length - 1].message
                      : chat.last_message.message}
                    {chat.last_message.message}
                  </div>
                  {chat.has_unRead_message &&
                    (chat.student &&
                    chat.last_message.sender !==
                      localStorage.getItem("tutorName") ? (
                      <div className="all-chats-user-notification-dot" />
                    ) : chat.tutor &&
                      chat.last_message.sender !==
                        localStorage.getItem("studentName") ? (
                      <div className="all-chats-user-notification-dot" />
                    ) : null)}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StudentPortalAllChatsComponent;
