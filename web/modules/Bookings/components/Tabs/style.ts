import { makeStyles } from '@material-ui/core';

  const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(8),
        marginTop:theme.spacing(5),
       },

       headerText:{
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: '22px',
        lineHeight: '30px',
        paddingLeft:theme.spacing(8),
        paddingRight:theme.spacing(8),
       },

       '&.MuiPaper-root':{
            boxShadow:'none !important'
       },

       MuiAppBar:{
        borderBottom: `1px solid ${theme.palette.grey[50]}`,
       },
   
       indicator: {
        background:theme.palette.primary.main,
       },

       tabItem:{
           fontWeight: 500,
           fontSize: '14px',
           lineHeight: '18px',
           fontStyle: 'normal',
           fontFamily: 'Poppins',
           color:theme.palette.grey[200],
           textTransform: 'capitalize',
           '&.Mui-selected':{
               color:theme.palette.primary.main,
           }
       },

  }));

  export default useStyles;