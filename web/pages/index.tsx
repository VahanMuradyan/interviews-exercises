import { 
  gql,
  ApolloClient, 
  createHttpLink,
  InMemoryCache

} from '@apollo/client';
import { useState , useEffect } from 'react';
import {HomeLayout} from "../layouts/MainLayout";
import { setContext } from '@apollo/client/link/context';
import TabsComponent from '../modules/Bookings/components/Tabs';

const Home = () => {
  const confirmed = [];
  const completed = [];
  const [confirmedBooks,setConfirmedBooks] = useState<Object>([]);
  const [completedBooks,setCompletedBooks] = useState<Object>([]);

  const httpLink = createHttpLink({
    uri: 'https://api-dev.spacenextdoor.com/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
  
    const token = localStorage.getItem('token');
  
    return {
      headers: {
        ...headers,
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJyb2xlcyI6WyJDVVNUT01FUiIsIlBST1ZJREVSIl0sImlhdCI6MTYxNTE5MjYwNCwiZXhwIjoxNjE1Nzk3NDA0fQ.cBGJQMZuIaVQJzsw4F21YOwEkq3SJ15o78SPhYoN1jo",
      }
    }
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
  
  // useEffect(() =>{
  //   client
  //   .query({
  //     query: gql`
  //     query {
  //       bookings(pagination:{limit:1,skip:0}) {
  //         edges{
  //           id
  //           currency
  //           status
  //           space_size
  //           currency_sign
  //           space_size_unit
  //           base_amount
  //           site_name
  //           total_amount
  //           move_in_date
  //           move_out_date
  //           site_address {
  //             city {
  //               name_en
  //             }
  //             country {
  //               name_en
  //             }
  //             street
  //           }
  //         }
  //       }
  //     }
  //     `
  //   })
  //   .then(result => (result.data.bookings.edges).map((item:any) =>{
  //     item.status == 'CONFIRMED' ? confirmed.push(item) : item.status == 'COMPLETED' ? completed.push(item) : false
  //     setCompletedBooks(completed);
  //     setConfirmedBooks(confirmed);
  //     console.log(result,'result')
  //   }));
  // },[])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
     .then(json => json.map(function(item) {
        if(item.id > 5){
          completed.push(item)
          setCompletedBooks([])
        }else{
          confirmed.push(item)
          setConfirmedBooks(confirmed)
        } 
     })) 
  },[])
 
    return (
        <HomeLayout>
          <TabsComponent 
            confirmedBooks={confirmedBooks} 
            completedBooks={completedBooks}
          />
        </HomeLayout>
    )
}

export default Home;