import React from 'react';
function LeftImage({imageURL , productName , ProductDescription}) {
    return (
<div className="container mt-5">
<br /> <br />
<div className='row text-centre'>

<div className='col-6 p-3'>
    <img src={imageURL} alt="" />
</div>

<div className='col-6'>
<h1>{productName}</h1>
<p>{ProductDescription}</p>
</div>


</div>


<br /> <br />
</div>
 


    )
}

export default LeftImage;