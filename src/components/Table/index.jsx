import React, { useContext, useEffect, useState } from "react";
import { PencilFill, Plus, Search, XCircleFill } from "react-bootstrap-icons";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import DataTable from "react-data-table-component";
import { ContentContext } from "../../context";
import { customStylesTable } from "../../assets/StylesTable";

const TableCrud = () => {
  const {
    currentDataTable,
    getCurrentDataTable,
    deleteFunction,
    theme,
    handleShowModal,
  } = useContext(ContentContext);
  console.log(
    "🚀 ~ file: index.jsx:17 ~ TableCrud ~ currentDataTable:",
    currentDataTable
  );
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [dynamicColumns, setDynamicColumns] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getCurrentDataTable(location.pathname);
  }, []);

  useEffect(() => {
    if (currentDataTable.length > 0) {
      const firstRow = currentDataTable[0];
      const columns = [
        {
          name: "Acciones",
          cell: (row) => acctionButtons(row),
          center: true,
          width: "100px",
        },
      ];

      for (const key in firstRow) {
        if (Object.hasOwnProperty.call(firstRow, key)) {
          columns.push({
            name: key,
            selector: (row) => row[key] || "", 
            sortable: true,
            center: true,
          });
        }
      }

      setDynamicColumns(columns);
    }
  }, [currentDataTable]);

  const acctionButtons = (row) => (
    <>
      <Button
        variant="warning"
        value="edit"
        className="d-flex rounded-0"
        onClick={(e) => handleShowModal(e.currentTarget.value, row.id)}
      >
        <PencilFill />
      </Button>
      <Button
        variant="danger"
        className="d-flex rounded-0"
        onClick={() => toDelete(row.id)}
      >
        <XCircleFill />
      </Button>
    </>
  );

  const toDelete = (id) => {
    if (selectedRows.size > 0) {
      deleteFunction(location.pathname, selectedRows);
    } else {
      deleteFunction(id);
    }
    setSelectedRows(new Set());
  };

  const basicColumns = [
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
      <DataTable
        noHeader
        striped
        highlightOnHover
        pagination
        theme={theme === "light" ? "solarized" : "dark"}
        data={currentDataTable}
        columns={dynamicColumns}
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
    </>
  );
};

export { TableCrud };
