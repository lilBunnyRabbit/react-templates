import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useHomeStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      position: 'relative',
    },
    themeChip: {
      marginLeft: theme.spacing(1),
    },
  });
});
