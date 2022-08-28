import React, {} from 'react';


import { differenceInDays, format } from 'date-fns';

/// What should be the tiles for Halloween? Kick off of the festivities?

let today = format(new Date(), "MM-dd-yyyy")

let hocusPocus = format(new Date( 2022, 8, 30), "MM-dd-yyyy")
console.log (today, hocusPocus)

const daysUntilHP = differenceInDays(
new Date(hocusPocus),
new Date(today)
)



// var day1 = new Date(now);
// var day2 = new Date("10/31/2022");

// var difference= Math.abs(day2-day1);
// let days = difference/(1000 * 3600 * 24)


function Upcoming() {


    return (
    <>

  <div className="col-md">
    <div className="border m-3">
      <h2>On Upcoming</h2>
      <ul>
        <li className='fw-bold'>Hocus Pocus 2: Disney+ Premier {hocusPocus} in {daysUntilHP}</li>
        <br></br>
        <br></br>
      </ul>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, ipsa animi molestiae fuga nemo quae asperiores aspernatur rem accusantium? Totam, repellendus? Ipsum repudiandae eaque vitae rem harum, ipsam nesciunt neque?</p>
    </div>
    </div>

    </>
    );
  };
    
export default Upcoming;

