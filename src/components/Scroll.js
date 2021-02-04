import React, { Fragment } from 'react';

const Scroll = (props) => {
    return (
        <Fragment>
            <div style={{overflow: 'scroll', border: '3px solid black', height:'600px'}}>
                { props.children }
            </div>
        </Fragment>
    );
}

export default Scroll;