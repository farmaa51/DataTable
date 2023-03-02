import React, { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Spinner,
} from "reactstrap";

export default function UserData() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const columns = [
    {
      name: "Title",
      selector: (row) => row.name,
      sortable: true,
      
    },
    {
      name: "userName",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Company",
      selector: (row) => row?.company.name,
      sortable: true,
    },
    {
      name: "Website",
      selector: (row) => row.website,
      sortable: true,
    },
  ];
  const getData = async () => {
    try {
      setLoading(true);
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUserData(json));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(userData);

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <Fragment>
      <Card className="overflow-hidden">
        <div className="react-dataTable">
          <DataTable
            columns={columns}
            data={userData}
            progressPending={loading}
            // pagination
            // responsive
            // paginationServer
            noHeader
            subHeader
          />
        </div>
      </Card>
    </Fragment>
  );
}
