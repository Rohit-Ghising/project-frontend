import { Card, CardContent, Typography, Grid, Paper } from "@mui/material";

export default function Dashboard() {
  return (
    <div>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Welcome, Rohit
      </Typography>

      <Grid container spacing={3}>
        {["Active Orders", "Lifetime Spend", "Wishlist Items"].map(
          (label, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{label}</Typography>
                  <Typography variant="h4" mt={1}>
                    {Math.floor(Math.random() * 50)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        )}
      </Grid>

      <Paper style={{ padding: 20, marginTop: 30 }}>
        <Typography variant="h6" fontWeight={600}>
          Recent Orders
        </Typography>
        <ul>
          <li>Order #1021 — Shipping</li>
          <li>Order #1018 — Delivered</li>
        </ul>
      </Paper>
    </div>
  );
}
