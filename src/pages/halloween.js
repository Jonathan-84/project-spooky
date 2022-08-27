import React, {} from 'react';
// import sleepyhollow from '../assets/sleepy-hollow.jpg';
import Upcoming from '../components/halloween/upcoming';

import { differenceInDays, format } from 'date-fns';

/// What should be the tiles for Halloween? Kick off of the festivities?

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


function Halloween() {


    return (
    <>
    <div className='mt-4 p-5 rounded jumbo d-flex justify-content-center'>
      <div className=''>
        <h2 className='p-3 border border-dark text-center bg-light rounded justify-content-center align-self-center fs-1 fw-bold'>Halloween</h2>
        </div>
   
      </div>



    <div className="container">
    <h1 className="text-center">{result} Days Until Halloween!</h1>
  <div className="row">
  <Upcoming></Upcoming>
    <div className="col-md">
    <div className="border m-3">
       <h2>Lorem ipsum dolor sit amet</h2>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, ipsa animi molestiae fuga nemo quae asperiores aspernatur rem accusantium? Totam, repellendus? Ipsum repudiandae eaque vitae rem harum, ipsam nesciunt neque?</p>
    </div>
    </div>
    <div className="col-md">
    <div className="border m-3">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, ipsa animi molestiae fuga nemo quae asperiores aspernatur rem accusantium? Totam, repellendus? Ipsum repudiandae eaque vitae rem harum, ipsam nesciunt neque?</p>
    </div>
    </div>
  </div>
</div>
    
   

    </>
    );
  };
    
export default Halloween;

