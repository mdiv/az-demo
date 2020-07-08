import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { getTheme } from 'config/theme';
import React, { useMemo } from 'react';

export const Theme: React.FC = ({ children }) => {
  const theme = useMemo(() => getTheme, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
