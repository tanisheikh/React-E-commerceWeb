import React from "react";
import React_Query_Ex from "./React_Query_Ex";
import { useMutation } from "react-query";
import { fetchData, addData, upDateData, deleteData } from "../server";

const UseMution = () => {
  const addJsonDataMution =(newDataObj)=>{
    useMutation(
        () => addData(newDataObj)
        // {staleTime: 60000,
        // refetchInterval: 70000,}
      );
  } 

  const updateJsonDataMutation =(updatedData)=>{
    useMutation(
        () => {
          upDateData(updatedData.id, updatedData);
        },
        {
          // onSuccess: () => {
          //   queryClient.invalidateQueries("users");
          // },
        }
      );
  } 
  const deleteDataMutation =(id)=>{
    useMutation(() => {
        deleteData(id);
      });
  }

  return (
    <div>
      <React_Query_Ex
        addJsonDataMution={addJsonDataMution}
        updateJsonDataMutation={updateJsonDataMutation}
        deleteDataMutation={deleteDataMutation}
      />
    </div>
  );
};

export default UseMution;
