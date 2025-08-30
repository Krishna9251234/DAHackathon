import React from 'react';
import { Snackbar, Alert } from '@mui/material';

export default function NotificationSnackbar({ open, onClose, message, severity = 'info' }) {
  return (
    <Snackbar open={open} autoHideDuration={2500} onClose={onClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
