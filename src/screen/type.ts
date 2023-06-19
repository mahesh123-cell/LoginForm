import { FormikHelpers } from "formik";

export type UserData = {
  id: number;
  userName: string;
  userEmail: string;
};

export interface TUserFormProps {
  onSubmit: (values: UserData, formikHelpers: FormikHelpers<UserData>) => void;
  initialValues: UserData;
  editIndex: number | null;
  onVisible: () => void;
  editId: number;
}

type OnHandleDel = (id: number) => void;

type OnHandleUpdate = (id: number) => void;

export interface TUserListProps {
  data: UserData[];
  onHandleDel: OnHandleDel;
  onHandleUpdate: OnHandleUpdate;
  onVisible: boolean;
}

export type TPopupMessage = {
  isShow: boolean;
  onConfirm: (index: number) => void;
  onCancel: () => void;
  dataIndex: number | null;
  id: number;
};
