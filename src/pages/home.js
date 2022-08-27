import React, {} from 'react';
// import sleepyhollow from '../assets/sleepy-hollow.jpg';

import '../App.css';
import { differenceInDays, format } from 'date-fns';


let today = format(new Date(), "MM-dd-yyyy")
let halloween = new Date( 2022, 9, 31)
console.log (today, halloween)

const result = differenceInDays(
new Date(halloween),
new Date(today)
)

console.log(result)

// var day1 = new Date(now);
// var day2 = new Date("10/31/2022");

// var difference= Math.abs(day2-day1);
// let days = difference/(1000 * 3600 * 24)


function Home() {


    return (
    <>
   <h1>I'm a Placeholder</h1>

    </>
    );
  };
    
export default Home;

