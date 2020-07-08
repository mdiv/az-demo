import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import createSpacing from '@material-ui/core/styles/createSpacing';

const spacing = createSpacing(8);

export const getTheme = responsiveFontSizes(
  createMuiTheme({
    spacing,
  }),
);
