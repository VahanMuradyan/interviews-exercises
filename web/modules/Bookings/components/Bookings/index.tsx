import React from 'react'
import {Box} from "@material-ui/core";
import useStyles from './style';
import Typography from '@material-ui/core/Typography';

interface BookingsProps {
    event:string,
    confirmed?:any,
    completed?:any
}


const BookingsContent:React.FC<BookingsProps> = ({
    event,
    confirmed,
    completed
}) => {
    const classes = useStyles();
    return(
        <Box>
            { event == 'COMPLETED' && completed.length == 0 ? 
            <Box className={classes.completedIsNull}>
                <Typography variant="h5">
                    No bookings Yet
                </Typography>
                <Typography variantMapping={{body2:'p'}} className={classes.additionalInform}>
                    There are no bookings we could find. Please create a booking to get details.
                </Typography>
            </Box>
            : ((event == 'CONFIRMED' ? (confirmed) : (completed)).map((item:any,index:number) => 
                    <Box key={index}>
                        <Box component="div" key={index} className={classes.BookingsCard}>
                            <Box className={classes.cardHeader}>
                                <Box component="div" className={classes.imgPar}>
                                    {
                                        index == 1 ? <img src="/images/Bookings/img1.jpg" alt="Booking" className={classes.BookingIMG}/>
                                        : <img src="/images/Bookings/img2.jpg" alt="Booking" className={classes.BookingIMG}/>
                                } 
                                </Box>
                                <Box className={classes.BookingInformation}>
                                <Typography variant="h5" className={classes.bookingName}>
                                    {/* {item.name} */}
                                    Loft Mackenzi   e Building
                                </Typography>
                                <Typography variant="h6" className={classes.bookingID}>
                                    {/* Booking ID {item.id} */}
                                    Booking ID 494950 
                                </Typography>
                                <Box component="div" className={classes.flex} style={{marginTop:'6px'}}>
                                    <img src="/images/Bookings/flag.png" alt="Path" className={classes.pathICO}/>
                                    <Typography variant="h6" className={classes.bookingLocation}>
                                        {/* {item.name} */}
                                        King Cross Street, 12 garden
                                    </Typography>
                                </Box>
                                <Box component="div" className={classes.successINFO}>
                                    <img src="/images/Bookings/success.png" alt="success" className={classes.succesICO}/>
                                    <Typography variant="h6" className={classes.statusStyle}>
                                        {item.status == 'CONFIRMED' ? 'Confirmed' : 'Complited'}
                                    </Typography>
                                </Box>
                                </Box>
                            </Box>
                            <Box className={classes.MoveINmoveOut}>
                            <Box style={{width:'100%'}}>
                                <Typography variant="h6" 
                                    style={{color:'#484451',marginBottom:'7px'}}>
                                    MOVE IN
                                </Typography>
                                <Typography variant="h6" className={classes.grey100} style={{width:'100%'}}>
                                    {/* { item.move_in_date } */}
                                    10 Jan 2020
                                </Typography>
                            </Box>
                            <Box className={classes.borderedLeft}>
                                <Typography variant="h6" style={{color:'#484451',marginBottom:'7px'}}>
                                    MOVE OUT
                                </Typography>
                                <Typography variant="h6" className={classes.grey100}>
                                    { 
                                        item.move_out_date ? item.move_out_date :  'Monthly Ongoing'
                                    }
                                </Typography>
                            </Box>
                        </Box>
                        <Box component="div" className={classes.flex} style={{marginTop:'17px',padding:'16px'}}>
                            <Box className={classes.flex} style={{width:'100%'}}>
                                <Typography variant="h5">
                                    0001
                                </Typography>
                                <Typography variant="h5" style={{marginLeft:'15px'}}>
                                    N/A
                                </Typography>
                            </Box>
                            <Box style={{width:'100%'}}>
                                 <Box component="div" className={classes.flexWithBetween}>
                                    <Typography variant="h5">
                                        {/* { item.space_size +" "+item.space_size_unit } */}
                                        4.6 sq ft
                                    </Typography>
                                    <Typography variantMapping={{body2:'p'}}>
                                        x1
                                    </Typography>
                                </Box>
                                <Typography variantMapping={{body2:'p'}}>
                                    M Size Units
                                </Typography>
                            </Box>
                        </Box>
                        <Box component="div" className={classes.PriceAndDetails}>
                            {
                               'CONFIRMED' == 'CONFIRMED' ?
                                (<Typography variant="h4" className={classes.currency}>
                                    {/* {item.currency_sign } */}
                                    $114.75
                                </Typography>) :
                                <button className={classes.styledButton}>BOOK AGAIN</button> 
                            }
                            <Box component="div" style={{display:'flex',alignItems:'center'}}>
                                <Typography variant="h4" className={classes.showDetails}>
                                    Show details
                                </Typography>
                                <img src="/images/Bookings/arrow.png" alt="arrow"/>
                            </Box>
                        </Box>
                        </Box>
                    </Box>
            ) 
        )
    }
        </Box>
        );
}

export default BookingsContent;