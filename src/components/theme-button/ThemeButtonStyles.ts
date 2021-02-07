import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useThemeButtonStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      marginTop: theme.spacing(3),
    },
  });
});
