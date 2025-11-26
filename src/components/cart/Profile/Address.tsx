import { Paper, Typography, Button } from "@mui/material";

const addresses = [
  {
    id: 1,
    tag: "PRIMARY",
    address: "Kathmandu, Nepaltar Road",
  },
  {
    id: 2,
    tag: "",
    address: "Pokhara, Lakeside Street",
  },
];

export default function Addresses() {
  return (
    <div>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        My Addresses
      </Typography>

      {addresses.map((a) => (
        <Paper key={a.id} style={{ padding: 20, marginBottom: 15 }}>
          <Typography variant="h6">
            {a.address} {a.tag && `(${a.tag})`}
          </Typography>
          <Button variant="outlined" sx={{ mr: 2 }}>
            Edit
          </Button>
          <Button color="error" variant="contained">
            Delete
          </Button>
        </Paper>
      ))}
    </div>
  );
}
