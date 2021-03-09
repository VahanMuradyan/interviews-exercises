import React , { useState }from 'react'
import {Box} from "@material-ui/core";
import useStyles from './style';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import TabsPanel from '../TabsContent'
import BookingsContent from '../Bookings';

interface bookingsDataType{
    confirmedBooks:any
    completedBooks:any
    children?:React.ReactNode,
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  

function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TabsComponent:React.FC<bookingsDataType> = ({
    confirmedBooks,
    completedBooks
}) => {

    const [tabEvent,setTabEvent] = useState('CONFIRMED')
    const [value,setValue] = useState<number>(0)
    const classes = useStyles();

    const handleChange = (event:React.ChangeEvent,newValue:number) => {
        setValue(newValue);
        setTabEvent(event.target.innerHTML.toUpperCase())
        console.log(event.target.innerHTML )
    }

    return(
        <Box component="div" className="root">
            <Box style={{height:'100px'}}></Box>
            <Typography variant="h4" className={classes.headerText}>Bookings</Typography>
            <Box className={classes.root} component="div">
            <AppBar position="static" color="transparent" elevation={0} className={classes.MuiAppBar}>
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    classes={{indicator:classes.indicator}}>
                <Tab label="Confirmed" {...a11yProps(0)} className={classes.tabItem}/>
                <Tab label="Completed" {...a11yProps(1)} className={classes.tabItem}/>
                </Tabs>
            </AppBar>
                <TabPanel value={value} index={0}>
                    <BookingsContent
                    tabEvent={tabEvent}
                    confirmed={confirmedBooks}/>
                </TabPanel>
            <TabPanel value={value} index={1} >
                <BookingsContent
                tabEvent={tabEvent}
                completed={completedBooks}/>
            </TabPanel>
            </Box>
        </Box>
    );
}

export default TabsComponent;