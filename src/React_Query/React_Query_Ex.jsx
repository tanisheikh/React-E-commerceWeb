import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./query.css";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import loadingImg from "./loadingGif/loading.gif";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addData, updateData, deleteData } from "../server";

//The useQuery hook returns a handful of objects such as isSuccess, errorOccurred, loading, isFetching, data, and error.
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
  const [pageNumber, setPageNumber] = useState(1);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const rematchData = useSelector((state) => state.formModel.userList);
  console.log("rematchData>>", rematchData);
  const toastRef = useRef(null);

//fetch Data using useQuery
  const queryResult = useQuery('userData', fetchData, {
    staleTime: 5000,
    cacheTime: 60000,
    refetchInterval: 30000,
    keepPreviousData: true,
    onSuccess: () => {
            const dataArray = queryClient.getQueryData("userData");
            // console.log(ss
            //   "queryClient.getQueryData>>>",
            //   queryClient.getQueryData("userData")
            // );
            dispatch.formModel.createRecordAsync(dataArray);
            console.log("data>>", dataArray);
          },
  });
  const { data: usersData, isLoading: loading, isError: errorOccurred, error } = queryResult;
  

    // useQuery(
    //   // ["userData",pageNumber],
    //   //   ()=>fetchData(pageNumber),
    //   "userData",
    //   fetchData,
    //   {
    //     keepPreviousData: true,
    //     select: (data) => ({
    //       arrayData: data.data,
    //     }),

    //     // cacheTime:20000,
    //     // staleTime: 60000,
    //     // refetchInterval: 604800000,
    //     onSuccess: () => {
    //       const dataArray = queryClient.getQueryData("userData");
    //       // console.log(
    //       //   "queryClient.getQueryData>>>",
    //       //   queryClient.getQueryData("userData")
    //       // );
    //       dispatch.formModel.createRecordAsync(dataArray);
    //       console.log("data>>", dataArray);
    //     },
    //   }
    // );

  const addDataFun = (newDataObj) => {
    addData(newDataObj);
  };
//Add Data using useMution 
  const addJsonDataMution = useMutation(addDataFun);
  const updatedDataRecieveFun = (updatedData) => {
    updateData(updatedData.id, updatedData);
  };
  // const updateJsonDataMutation = useMutation(updatedDataRecieveFun, {
  //   // onSuccess: () => {
  //   //   queryClient.invalidateQueries("users");
  //   // },
  // });


  //update Data using useMution 

  const updateJsonDataMutation = useMutation((updatedDataObj) => {
    updatedDataRecieveFun(updatedDataObj);

    console.log("updatedDataObj>>", updatedDataObj);
  });

  //delete Data using useMution 

  const deleteDataMutation = useMutation((id) => {
    deleteData(id);
  });
  console.log("toastRef>>>", toastRef);

  //how to cancel request when user click window back before form submit  using react query cancelQueries

  useEffect(() => {
    const handleBackWindow = () => {
      queryClient.cancelQueries("userData");
    };
    console.log("useEffect request cancelled");
    window.addEventListener("beforeunload", handleBackWindow);
    return () => {
      window.removeEventListener("beforeunload", handleBackWindow);
    };
  }, []);



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
    rowDataObj.userId = new Date().getTime();
    console.log("rowDataObj>>", rowDataObj);
    addJsonDataMution.mutate(rowDataObj);
    setVisible(false);
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
    //manually cancel Api reqest (cancelQueries)
    queryClient.cancelQueries("userData");
    console.log("function caled cancel>>", queryClient.cancelQueries);
    setVisible(false);
  };
  const pageInc = () => {
    console.log("pageNumberInc", pageNumber);

    setPageNumber((page) => page + 1);
  };
  const pageDec = () => {
    console.log("pageNumberDec", pageNumber);

    setPageNumber((page) => page - 1);
  };
  const footer = () => {
    return (
      <div className="paginationBtn">
        <Button
          type="button"
          icon="pi pi-angle-double-left"
          onClick={pageDec}
        />
        <Button
          type="button"
          icon="pi pi-angle-double-right"
          onClick={pageInc}
        />
      </div>
    );
  };

  return (
    <>
      <Toast ref={toastRef} />
      {loading ? (
        <div>
          <img src={loadingImg} alt="loading..." className="loading_gif" />
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
              <DataTable
                value={usersData}
                tableStyle={{ minWidth: "50rem" }}
                footer={usersData ? footer : ""}
              >
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

              {usersData?.userId ? (
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
      {errorOccurred ? setTimeOutShowFun() : ""}
    </>
  );
};

export default React_Query_Ex;
