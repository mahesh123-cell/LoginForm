import React, { useEffect, useState } from "react";
import { FormikHelpers } from "formik";
import { UserData } from "./type";
import UserForm from "./userForm";
import UserList from "./userList";
import PopupMessage from "./popupMessage";

const User: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);

  const [editId, setEditId] = useState<number | null>(null);

  const [initialValues, setInitialValues] = useState<UserData>({
    id: -1,
    userName: "",
    userEmail: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  const [confirm, setConfirm] = useState(false);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    const existingData = localStorage.getItem("datastore");
    if (existingData) {
      setData(JSON.parse(existingData));
    }
  }, []);

  const onSubmit = (
    values: UserData,
    formikHelpers: FormikHelpers<UserData>
  ) => {
    if (editId !== null) {
      const newData = data.map((user) =>
        user.id === editId ? { ...values, id: user.id } : user
      );
      setData(newData);
      localStorage.setItem("datastore", JSON.stringify(newData));
      setEditId(null);
      setInitialValues({
        id: -1,
        userName: "",
        userEmail: "",
      });
    } else {
      const index = data.findIndex(
        (element) => values.userEmail === element.userEmail
      );
      if (index !== -1) return;
      const newData = [...data, { ...values, id: Number(Date.now()) }];
      setData(newData);
      localStorage.setItem("datastore", JSON.stringify(newData));
      formikHelpers.resetForm();
    }
  };

  const onHandleDel = (id: number) => {
    setDeleteId(id);
    setConfirm(true);
  };

  const onConfirmDelete = (id: number) => {
    console.log(deleteId);
    const newData = data.filter((user) => user.id !== id);
    setData(newData);
    localStorage.setItem("datastore", JSON.stringify(newData));
    setConfirm(false);
  };

  const onCancelDelete = () => {
    setConfirm(false);
  };

  const onHandleUpdate = (id: number) => {
    setEditId(id);
    const user = data.find((user) => user.id === id);
    setIsVisible(isVisible);
    if (user) {
      setInitialValues({
        id: user.id,
        userName: user.userName,
        userEmail: user.userEmail,
      });
    }
  };

  const toggleForm = () => {
    setIsVisible(isVisible);
  };

  return (
    <>
      <UserForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        editId={editId as number}
        onVisible={toggleForm}
        editIndex={editId}
      />
      {data.length > 0 && (
        <UserList
          data={data}
          onHandleDel={onHandleDel}
          onHandleUpdate={onHandleUpdate}
          onVisible={isVisible}
        />
      )}

      {confirm && (
        <PopupMessage
          isShow={confirm}
          dataIndex={deleteId as number}
          onConfirm={onConfirmDelete}
          onCancel={onCancelDelete}
          id={deleteId as number}
        />
      )}
    </>
  );
};

export default User;
