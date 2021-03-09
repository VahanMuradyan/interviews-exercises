import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    BookingsCard :{
    width: '100%',
    background: '#FFFFFF',
    paddingTop:theme.spacing(10),
    paddingBottom:theme.spacing(15),
    marginTop:theme.spacing(5),
    border: '2px solid #F3F7F9',
    boxSizing: 'border-box',
    borderRadius: '22px'
    },

    cardHeader: {
        display:'flex',
        padding:theme.spacing(8),
        borderBottom:'2px solid #F3F7F9',
    },

    BookingIMG:{
        background: '#FFFFFF',
        border: '2px solid #F3F7F9',
        boxSizing: 'border-box',
        borderRadius: '22px',
    },

    imgPar:{
        paddingRight:theme.spacing(15),
    },

    bookingName:{
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '18px',
        color: '#333333',
    },

    flex:{
        display:'flex'
    },

    bookingID:{
        marginTop:theme.spacing(3),
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0.5px',
        color: '#333333',
    },

    BookingInformation:{
        width:'65%',
    },

    successINFO:{
        display:'flex',
        objectFit: 'contain',
        marginTop:theme.spacing(7)
    },

    succesICO:{
        marginRight:theme.spacing(3)
    },

    statusStyle:{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '20px',
        color:theme.palette.success.main
    },

    bookingLocation:{
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '20px',
    },

    pathICO:{
        objectFit: 'contain',
        marginRight:theme.spacing(3)
    },

    currency:{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '20px',
    },

    MoveINmoveOut:{
        display:'flex',
        padding:theme.spacing(8),
        paddingTop:theme.spacing(10),
        paddingBottom:theme.spacing(10),
        borderBottom:'2px solid #F3F7F9',
    },

    borderedLeft:{
        width:'100%',
        paddingLeft: '20px',
        marginLeft:theme.spacing(8),
        borderLeft:'2px solid #F3F7F9',
    },

    grey100:{
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '20px',
        color:theme.palette.grey[100]
    },

    flexWithBetween:{
        display:'flex',
        justifyContent:'space-between'
    },

    PriceAndDetails:{
        display:'flex',
        padding:theme.spacing(8),
        marginTop:theme.spacing(10),
        justifyContent:'space-between'
    },

    showDetails:{
        marginRight:theme.spacing(5),
        color:theme.palette.primary.main,
        '&:hover':{
            cursor:'pointer'
        }
    },

    styledButton:{
        paddingRight:theme.spacing(10),
        paddingLeft:theme.spacing(10),
        background: '#00A0E3',
        borderRadius: '19px',
        border:'none',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: '13px',
        lineHeight: '19px',
        letterSpacing: '0.01em',
        color:theme.palette.background.default,
        paddingTop: theme.spacing(9),
        paddingBottom: theme.spacing(9),
        outline:'none'
    },

    completedIsNull:{
        width:'100%',
        height: '157px',
        borderRadius: '22px',
        background: '#EAF0F6',
        padding:theme.spacing(10.5),
        color: theme.palette.grey[200],
        marginTop:theme.spacing(15),
    },

    additionalInform:{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '20px',
        marginTop:theme.spacing(5),
        color: theme.palette.grey[200],

    }
}))

export default useStyles;