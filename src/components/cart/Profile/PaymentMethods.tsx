import { Paper, Typography, Button } from "@mui/material";

const cards = [
  { brand: "Visa", last4: "4242", exp: "06/28", default: true },
  { brand: "MasterCard", last4: "1212", exp: "04/27", default: false },
];

export default function PaymentMethods() {
  return (
    <div>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Payment Methods
      </Typography>

      {cards.map((c, i) => (
        <Paper key={i} style={{ padding: 20, marginBottom: 15 }}>
          <Typography variant="h6">
            {c.brand} •••• {c.last4}
          </Typography>
          <Typography>Expires: {c.exp}</Typography>
          {c.default ? (
            <Button variant="contained" sx={{ mt: 2 }} disabled>
              Default
            </Button>
          ) : (
            <Button variant="outlined" sx={{ mt: 2, mr: 2 }}>
              Set Default
            </Button>
          )}
          <Button color="error" variant="contained" sx={{ mt: 2 }}>
            Remove
          </Button>
        </Paper>
      ))}
    </div>
  );
}
