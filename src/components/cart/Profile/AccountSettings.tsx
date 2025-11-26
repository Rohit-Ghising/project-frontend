import { TextField, Button, Paper, Typography } from "@mui/material";

export default function AccountSettings() {
  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Account Settings
      </Typography>

      <TextField fullWidth label="Name" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Phone" margin="normal" />

      <Button variant="contained" sx={{ mt: 2 }}>
        Update Profile
      </Button>

      <Typography variant="h6" mt={4}>
        Change Password
      </Typography>
      <TextField
        fullWidth
        label="Current Password"
        margin="normal"
        type="password"
      />
      <TextField
        fullWidth
        label="New Password"
        margin="normal"
        type="password"
      />
      <Button variant="outlined" sx={{ mt: 2 }}>
        Update Password
      </Button>
    </Paper>
  );
}
