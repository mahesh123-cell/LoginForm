import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserData } from "./type";

const UserDisplay = () => {
  const id = useParams();
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    const existingData = localStorage.getItem("datastore");
    if (existingData) {
      setData(JSON.parse(existingData));
    }
  }, []);

  console.log(data);

  return (
    <div>
      {data.map((item) => {
        return (
          item.id === Number(id.id) && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <p style={{ color: "red", fontSize: "22px" }}>
                Hii Welcome &nbsp;
                {item.userName}
                <br />
                {item.userEmail}
              </p>
            </div>
          )
        );
      })}
    </div>
  );
};

export default UserDisplay;
