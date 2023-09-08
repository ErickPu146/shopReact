import React, { useContext, useEffect, useState } from "react";
import { X } from "react-bootstrap-icons";
import { Button, Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { ContentContext } from "../../context";
import { SidebarApp } from "../../components/Sidebar";
import "../themeDark.css"
import { customStylesTable } from "../../assets/StylesTable";

const UsersCrud = () => {
  const { users, getCustomUsers, deleteUser, theme } = useContext(ContentContext);
  const [selectedRows, setSelectedRows] = useState(new Set());

  useEffect(() => {
    getCustomUsers();
  }, []);

  const deleteButton = (row) => (
    <Button
      className="border-0 bg-transparent"
      onClick={() => toDelete(row.id)}
    >
      <X className="fs-2 text-danger"/>
    </Button>
  );

  const toDelete = (id) => {
    if (selectedRows.size > 0) {
      deleteUser(selectedRows);
    } else {
      deleteUser(id);
    }
    setSelectedRows(new Set());
  };

  const basicColumns = [
    {
      name: "Eliminar",
      cell: (row) => deleteButton(row),
      center: true,
      width: "100px",
    },
    {
      name: "ID",
      selector: (row) => row.id || "",
      sortable: true,
      center: true,
      width: "100px",
    },
    {
      name: "Correo electronico",
      selector: (row) => row.email || "",
      sortable: true,
      center: true,
    },
    {
      name: "Fecha de creacion",
      selector: (row) => row.createdAt,
      sortable: true,
      center: true,
    },
    {
      name: "Fecha de actualizacion",
      selector: (row) => row.updatedAt,
      sortable: true,
      center: true,
    },
  ];
  return (
    <>
      <div className={`${theme === "light" ? "bg-light" : "bg-dark"} d-flex`}>
        <SidebarApp />
        <div style={{ flex: 1 }}>
          <Container>
            <DataTable
              noHeader
              striped
              highlightOnHover
              pointerOnHover
              pagination
              theme={theme === "light" ? "solarized" : "dark"}
              data={users}
              columns={basicColumns}
              customStyles={customStylesTable}
              className="table-responsive"
              paginationRowsPerPageOptions={[10, 25, 50, 100]}
              paginationComponentOptions={{
                rowsPerPageText: "Filas por pagina",
                rangeSeparatorText: "de",
              }}
              selectableRows
              onSelectedRowsChange={({ selectedRows }) => {
                setSelectedRows(new Set(selectedRows.map((row) => row.id)));
              }}
              noDataComponent="No se encontraron registros agregados."
            />
          </Container>
        </div>
      </div>
    </>
  );
};

export { UsersCrud };
