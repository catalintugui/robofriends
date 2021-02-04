import React, { Fragment } from 'react';

const searchBox = ({searchfield, searchChange}) => {
    return(
        <Fragment>
        <div className='pa2'>
        <input className='pa3 ba b--green bg-lightest-blue br3' type='search' placeholder='Search Robots' onChange={searchChange}/>
        </div>
        </Fragment>
    )
}

export default searchBox;