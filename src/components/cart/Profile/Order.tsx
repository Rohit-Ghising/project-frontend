import { Paper, Typography, Button, Stack } from "@mui/material";

const orders = [
  { id: "ORD-1211", status: "Shipping", total: "$120" },
  { id: "ORD-1189", status: "Delivered", total: "$220" },
  { id: "ORD-1155", status: "Processing", total: "$80" },
];

export default function Orders() {
  return (
    <div>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        My Orders
      </Typography>

      {orders.map((o) => (
        <Paper key={o.id} style={{ padding: 20, marginBottom: 15 }}>
          <Typography variant="h6">{o.id}</Typography>
          <Typography>Status: {o.status}</Typography>
          <Typography>Total: {o.total}</Typography>

          <Stack direction="row" spacing={2} mt={2}>
            <Button variant="contained">Track</Button>
            <Button variant="outlined">Details</Button>
          </Stack>
        </Paper>
      ))}
    </div>
  );
}
