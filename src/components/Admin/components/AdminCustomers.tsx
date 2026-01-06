import React, { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Button,
} from "@mui/material";

interface Customer {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  status: "active" | "blocked";
}

const initialCustomers: Customer[] = [
  {
    id: "CUST-001",
    name: "Rohit Ghising",
    email: "rohit@example.com",
    createdAt: "2025-01-01",
    status: "active",
  },
  {
    id: "CUST-002",
    name: "Suman Karki",
    email: "suman@example.com",
    createdAt: "2025-02-15",
    status: "blocked",
  },
  {
    id: "CUST-003",
    name: "Anita Shrestha",
    email: "anita@example.com",
    createdAt: "2025-03-10",
    status: "active",
  },
];

const AdminCustomers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);

  const toggleStatus = (id: string) => {
    setCustomers((prev) =>
      prev.map((cust) =>
        cust.id === id
          ? { ...cust, status: cust.status === "active" ? "blocked" : "active" }
          : cust
      )
    );
  };

  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Registered Customers
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Registered On</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.createdAt}</TableCell>
                <TableCell>
                  <Chip
                    label={customer.status}
                    color={customer.status === "active" ? "success" : "error"}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => toggleStatus(customer.id)}
                  >
                    {customer.status === "active" ? "Block" : "Unblock"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminCustomers;
