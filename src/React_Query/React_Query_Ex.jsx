import axios from "axios";
import React, { useRef, useState } from "react";
import "./query.css";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import loading from "./loadingGif/loading.gif";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addData, updateData, deleteData } from "../server";

//The useQuery hook returns a handful of objects such as isSuccess, isError, isLoading, isFetching, data, and error.
//    "start": "react-scripts start",
// Resources
//   http://localhost:4000/posts
//   http://localhost:4000/comments
//   http://localhost:4000/profile

//   Home
//   http://localhost:4000

//Type s + enter at any time to create a snapshot of the database
//Watching..
const React_Query_Ex = () => {
  const [visible, setVisible] = useState(false);
  const [rowDataObj, setRowDataObj] = useState(null);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const rematchData = useSelector((state) => state.formModel.userList);
  console.log("rematchData>>", rematchData);
  const toastRef = useRef(null);

  const { isLoading, isError, error, data, status, cancel } = useQuery(
    "userData",
    fetchData,
    {
      // staleTime: 60000,
      // refetchInterval: 604,800,000 ms,
      onSuccess: () => {
        const data = queryClient.getQueryData("userData");
        console.log(
          "queryClient.getQueryData>>>",
          queryClient.getQueryData("userData")
        );
        dispatch.formModel.createRecordAsync(data);
      },
    }
  );

  const addDataFun = (newDataObj) => {
    addData(newDataObj);
  };

  const addJsonDataMution = useMutation(
    addDataFun
    // {staleTime: 60000,
    // refetchInterval: 70000,}
  );
  const updatedDataRecieveFun = (updatedData) => {
    updateData(updatedData.id, updatedData);
  };
  // const updateJsonDataMutation = useMutation(updatedDataRecieveFun, {
  //   // onSuccess: () => {
  //   //   queryClient.invalidateQueries("users");
  //   // },
  // });
  const updateJsonDataMutation = useMutation((updatedDataObj) => {
    updatedDataRecieveFun(updatedDataObj);

    console.log("updatedDataObj>>", updatedDataObj);
  });

  const deleteDataMutation = useMutation((id) => {
    deleteData(id);
  });

  const show = () => {
    if (toastRef && toastRef.current)
      toastRef.current.show({
        severity: "error",
        summary: "Error",
        detail: `${error.message}`,
      });
    else console.info("ToastRef is not found >>>??? ");
  };
  const setTimeOutShowFun = (toastRef) => {
    setTimeout(() => {
      show(toastRef);
    }, 100);
  };
  const showDailogBox = (rowObj) => {
    setRowDataObj({
      userId: rowObj.userId,
      id: rowObj.id,
      title: rowObj.title,
      body: rowObj.body,
    });

    setVisible(true);
  };
  const editButtonTemplete = (rowData) => {
    return (
      <>
        <Button
          type="button"
          icon="pi pi-user-edit"
          onClick={() => showDailogBox(rowData)}
        />
      </>
    );
  };
  const addButtonTemplete = () => {
    setRowDataObj(null);

    if (rowDataObj === null) {
      setVisible(true);
    }
  };
  const addDataBtn = () => {
    console.log("add functional called>>");
    const newData = rowDataObj;
    setRowDataObj({
      userId: new Date().getTime(),
      // id: new Date().getTime(),
      title: newData.title,
      body: newData.body,
    });
    addJsonDataMution.mutate(rowDataObj);
    setVisible(false);
    console.log("rowDataObj>>", rowDataObj);
    queryClient.cancelQueries("userData");
  };
  const deleteButtonTemplete = (rowData) => {
    return (
      <>
        <Button
          type="button"
          icon="pi pi-trash"
          onClick={() => deleteDataMutation.mutate(rowData.id)}
        />
      </>
    );
  };
  const handleSubmit = () => {
    // e.preventDefault();

    updateJsonDataMutation.mutate(rowDataObj);
    setVisible(false);
  };
  const cancelReq = () => {
    queryClient.cancelQueries("userData");
    console.log("function caled cancel>>", queryClient.cancelQueries);
    setVisible(false);
  };

  return (
    <>
      <Toast ref={toastRef} />
      {isLoading ? (
        <div>
          <img src={loading} alt="loading..." className="loading_gif" />
        </div>
      ) : (
        <>
          <div className="container">
            <div className="card cardTable">
              <Button
                type="button"
                icon="pi pi-user-plus"
                className="editBtn"
                onClick={addButtonTemplete}
              />
              <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
                <Column field="id" header="Id"></Column>
                <Column field="title" header="Title"></Column>
                <Column field="body" header="Description"></Column>
                <Column header="Edit" body={(row) => editButtonTemplete(row)} />
                <Column
                  header="Delete"
                  body={(row) => deleteButtonTemplete(row)}
                />
              </DataTable>
            </div>
          </div>

          <Dialog
            header="Header"
            visible={visible}
            style={{ width: "50vw" }}
            onHide={() => setVisible(false)}
          >
            <form>
              <label>Title</label>
              <span className="p-float-label">
                <InputText
                  id="title"
                  value={rowDataObj?.title}
                  onChange={(e) =>
                    setRowDataObj({ ...rowDataObj, title: e.target.value })
                  }
                />
                <label htmlFor="title">Title</label>
              </span>
              <label>Description</label>
              <span className="p-float-label">
                <InputText
                  id="desc"
                  value={rowDataObj?.body}
                  onChange={(e) =>
                    setRowDataObj({ ...rowDataObj, body: e.target.value })
                  }
                />
                <label htmlFor="desc">Description</label>
              </span>

              {data?.userId ? (
                <Button
                  label="Save"
                  type="button"
                  icon="pi pi-check"
                  onClick={handleSubmit}
                  autoFocus
                />
              ) : (
                <Button
                  label="Add"
                  type="button"
                  icon="pi pi-check"
                  onClick={addDataBtn}
                  autoFocus
                />
              )}
              <Button
                label="Cancel"
                type="button"
                icon="pi pi-check"
                onClick={cancelReq}
                autoFocus
              />
            </form>
          </Dialog>
        </>
      )}
      {isError ? setTimeOutShowFun() : ""}
    </>
  );
};

export default React_Query_Ex;
