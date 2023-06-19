import React, { useState } from "react";
import "./userList.css";
import { TUserListProps } from "./type";
import { Link } from "react-router-dom";

const UserList: React.FC<TUserListProps> = ({
  data,
  onHandleDel,
  onHandleUpdate,
  onVisible,
}) => {
  const [sortOrder, setSortOrder] = useState<"ASC" | "DESC">("ASC");

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === "ASC") {
      return a.userName.localeCompare(b.userName);
    } else {
      return b.userName.localeCompare(a.userName);
    }
  });

  const onIncreSort = () => {
    setSortOrder("ASC");
  };

  const onDecreSort = () => {
    setSortOrder("DESC");
  };

  return (
    <>
      <div className="Form1" style={{ display: onVisible ? "none" : "block" }}>
        <table style={{ border: "1px solid black" }}>
          <thead style={{ border: "1px solid black" }}>
            <tr>
              <th style={{ border: "1px solid black" }}>
                <button onClick={onIncreSort}>A-Z</button>Name
                <button onClick={onDecreSort}>Z-A</button>
              </th>
              <th style={{ border: "1px solid black" }}>Email</th>

              <th style={{ border: "1px solid black" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((elem) => (
              <tr key={elem.id} style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>
                  <Link to={`userdis/${elem.id}`}>{elem.userName}</Link>
                </td>
                <td style={{ border: "1px solid black" }}>
                  <Link to={`userdis/${elem.id}`}>{elem.userEmail}</Link>
                </td>
                <td>
                  <button
                    onClick={() => onHandleDel(elem.id)}
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    REMOVE
                  </button>
                  <button
                    onClick={() => {
                      onHandleUpdate(elem.id);
                    }}
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    EDIT PROFILE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
