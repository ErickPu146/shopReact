import React, { useContext, useEffect, useState } from "react";
import { PencilFill, Plus, Search, XCircleFill } from "react-bootstrap-icons";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";
import { ContentContext } from "../../context";
import { customStylesTable } from "../../assets/StylesTable";
import "../style.css"

const UsersCrud = () => {
  const { users, getCustomUsers, deleteUser, theme, handleShowModal } =
    useContext(ContentContext);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const location = useLocation();

  useEffect(() => {
    getCustomUsers();
  }, []);

  const acctionButtons = (row) => (
    <>
      <Button
        variant="warning"
        value="edit"
        className="d-flex rounded-0"
        onClick={(e) =>
          handleShowModal(e.currentTarget.value, location.pathname)
        }
      >
        <PencilFill className="" />
      </Button>
      <Button
        variant="danger"
        className="d-flex rounded-0"
        onClick={() => toDelete(row.id)}
      >
        <XCircleFill className="" />
      </Button>
    </>
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
      name: "Acciones",
      cell: (row) => acctionButtons(row),
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
      <Container className={`${theme === "light" ? "" : "text-light"}`}>
        <div
          className={`${
            theme === "light" ? "shadowLight" : "shadowDark"
          } text-center w-100 mt-3 p-1`}
        >
          <h1>Usuarios</h1>
        </div>
        <Row className="justify-content-center my-4">
          <Col md="4">
            <Button
              variant="success"
              value="new"
              onClick={(e) =>
                handleShowModal(e.currentTarget.value, location.pathname)
              }
            >
              <Plus className="fs-2" />
              <span>Nuevo</span>
            </Button>
          </Col>
          <Col md="8" className="d-flex">
            <Form.Control
              className="w-50 rounded-start-pill"
              size="lg"
              placeholder="Buscar por email"
            ></Form.Control>
            <Button variant="success" className="rounded-end-pill px-4">
              <Search />
            </Button>
          </Col>
        </Row>
        <DataTable
          noHeader
          striped
          highlightOnHover
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
    </>
  );
};

export { UsersCrud };
