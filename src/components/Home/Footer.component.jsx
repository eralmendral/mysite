import React from 'react'
import moment from 'moment';
const FooterComponent = () => (
    <div className='footer'>
        <p className="text-white">All rights reserved &copy; {moment().year()}</p>
    </div>
)

export default FooterComponent;