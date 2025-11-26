import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

export default function LogoutModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Are you sure you want to logout?</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="error" variant="contained">
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
}
