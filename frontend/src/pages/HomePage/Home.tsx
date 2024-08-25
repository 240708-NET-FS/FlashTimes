import { UserContext } from 'App';
import React, { useContext, useEffect } from 'react';
import SetsContainer from './components/SetsContainer';

const Home = () => {
  const {user, setUser} = useContext(UserContext);

  // TODO: get sets from users 
  // Ask about endpoint for that. doesn't look like there's one


  // for UI prototype
  const protoSets:any[] = [
    {
      setId: 1,
      setName: "set1",
      setLength: 5,
      author: user,
      cards: []

    },
    {
      setId: 2,
      setName: "set2",
      setLength: 5,
      author: user,
      cards: []

    },
    {
      setId: 3,
      setName: "set3",
      setLength: 5,
      author: user,
      cards: []

    },
    {
      setId: 4,
      setName: "set4",
      setLength: 5,
      author: user,
      cards: []

    },
    {
      setId: 5,
      setName: "set5",
      setLength: 5,
      author: user,
      cards: []

    },
    {
      setId: 6,
      setName: "set6",
      setLength: 5,
      author: user,
      cards: []

    }


  ];



  useEffect(()=> {
    console.log("fetching sets...");
    
    // console.log(user);

  }, [])


  return(
    <div>
      <div style={{marginTop: 100}}>
        <SetsContainer sets={protoSets}/>
      </div>
    </div>
  )
};

export default Home;
