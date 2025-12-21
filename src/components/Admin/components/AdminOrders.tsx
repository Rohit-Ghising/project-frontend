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
  Select,
  MenuItem,
  Chip,
} from "@mui/material";

type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

interface Order {
  id: string;
  customerName: string;
  email: string;
  totalAmount: number;
  paymentMethod: string;
  status: OrderStatus;
  createdAt: string;
}

const initialOrders: Order[] = [
  {
    id: "ORD-001",
    customerName: "Rohit Ghising",
    email: "rohit@example.com",
    totalAmount: 2500,
    paymentMethod: "PayPal",
    status: "pending",
    createdAt: "2025-12-20",
  },
  {
    id: "ORD-002",
    customerName: "Suman Karki",
    email: "suman@example.com",
    totalAmount: 4800,
    paymentMethod: "COD",
    status: "processing",
    createdAt: "2025-12-19",
  },
];

const statusColor = (status: OrderStatus) => {
  switch (status) {
    case "pending":
      return "warning";
    case "processing":
      return "info";
    case "shipped":
      return "primary";
    case "delivered":
      return "success";
    case "cancelled":
      return "error";
    default:
      return "default";
  }
};

const AdminOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const handleStatusChange = (id: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };

  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Orders Management
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Payment</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Change Status</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell>Rs. {order.totalAmount}</TableCell>
                <TableCell>{order.paymentMethod}</TableCell>

                <TableCell>
                  <Chip
                    label={order.status}
                    color={statusColor(order.status)}
                    size="small"
                  />
                </TableCell>

                <TableCell>
                  <Select
                    size="small"
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(
                        order.id,
                        e.target.value as OrderStatus
                      )
                    }
                  >
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="processing">Processing</MenuItem>
                    <MenuItem value="shipped">Shipped</MenuItem>
                    <MenuItem value="delivered">Delivered</MenuItem>
                    <MenuItem value="cancelled">Cancelled</MenuItem>
                  </Select>
                </TableCell>

                <TableCell>{order.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminOrders;
