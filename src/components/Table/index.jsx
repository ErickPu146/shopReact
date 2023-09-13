import React, { useContext, useEffect, useState } from "react";
import { PencilFill, XCircleFill } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
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

  const [dynamicColumns, setDynamicColumns] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getCurrentDataTable(location.pathname);
  }, [location.pathname]);

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
          if (
            key !== "password" &&
            key !== "brandId" &&
            key !== "categoryId" &&
            key !== "userId"
          ) {
            if (key === "Brand") {
              columns.push({
                name: "Marca",
                selector: (row) => (row.Brand ? row.Brand.name || "" : ""),
                sortable: true,
                center: true,
              });
            } else if (key === "Category") {
              columns.push({
                name: "Categoría",
                selector: (row) =>
                  row.Category ? row.Category.name || "" : "",
                sortable: true,
                center: true,
              });
            } else if (key === "User") {
              columns.push({
                name: "Usuario",
                selector: (row) => (row.User ? row.User.email || "" : ""),
                sortable: true,
                center: true,
              });
            } else {
              columns.push({
                name: key,
                selector: (row) => row[key] || "",
                sortable: true,
                center: true,
                width: key === "id" ? "120px" : "",
              });
            }
          }
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
    deleteFunction(id);
  };

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
        noDataComponent="No se encontraron registros agregados."
      />
    </>
  );
};

export { TableCrud };
