import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import database from './firebase'
import { collection } from "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";

// const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
//     console.log("Current data: ", doc.data());
// });
function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'raghul',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVI8wwjmbk07RHjMaoxGcLQw5kRfAizckn7g&s'
        }, 
        {
            name: 'phavan',
            url: 'https://t4.ftcdn.net/jpg/03/03/11/75/360_F_303117590_NNmo6BS2fOBEmDp8uKs2maYmt03t8fSL.jpg'
        }
    ])

    // const usersCollectionRef = collection(db, 'users');
    // useEffect(() => {
    //     const unsubscribe = collection(database, 'people').onSnapshot(snapshot => (
    //         snapshot.docs.map((doc) => doc.data())
    //     ));
    //     return () => {
    //         unsubscribe();
    //     }
    // }, [people])
  return (
    <div>
        <div className='tinderCardsContainer'>

            {people.map(person => (
                <TinderCard className='swipe' key={person.name} preventSwipe={['up', 'down']}>
                    <div className='card' style={{backgroundImage: `url(${person.url})`}}>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            
        </div>
    </div>
  )
}

export default TinderCards
