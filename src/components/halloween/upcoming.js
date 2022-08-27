import React, {} from 'react';


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


function Upcoming() {


    return (
    <>

  <div className="col-md">
    <div className="border m-3">
      <h2>On Upcomg</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, ipsa animi molestiae fuga nemo quae asperiores aspernatur rem accusantium? Totam, repellendus? Ipsum repudiandae eaque vitae rem harum, ipsam nesciunt neque?</p>
    </div>
    </div>

    </>
    );
  };
    
export default Upcoming;

