import React from 'react'
import moment from 'moment';
const FooterComponent = () => (
    <div className='footer'>
        <p className="text-white">created with react<img src="https://img.icons8.com/plasticine/100/000000/react.png" width="15px"/> &copy; { moment().year() }</p>
    </div>
)

export default FooterComponent;