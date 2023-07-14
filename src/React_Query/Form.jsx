import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
import { Column } from "primereact/column";

const MyComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    // Other data items
  ];

  const handleEdit = (rowData) => {
    // Use the selectedItem for further processing, such as opening an edit form
    console.log("rowData>>", rowData);
  };

  const rowClassName = (rowData) => {
    console.log("selectedItem>>", selectedItem);

    return selectedItem && selectedItem.id === rowData.id ? "selected-row" : "";
  };

  const actionTemplate = (rowData) => {
    return (
      <Button
        icon="pi pi-pencil"
        onClick={() => handleEdit(rowData)}
        className="p-button-rounded p-button-info"
      />
    );
  };

  return (
    <DataTable
      value={data}
    //   selectionMode="single"
    //   selection={selectedItem}
    //   onSelectionChange={(e) => setSelectedItem(e.value)}
    //   rowClassName={rowClassName}
    >
      <Column field="id" header="ID" />
      <Column field="name" header="Name" />
      <Column
        body={actionTemplate}
        style={{ textAlign: "center", width: "6rem" }}
      />
    </DataTable>
  );
};

export default MyComponent;
