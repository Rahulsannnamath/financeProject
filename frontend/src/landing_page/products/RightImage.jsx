import React from 'react';

function RightImage({ imageURL, productName, ProductDescription }) {
  return (
    <div className="container  py-2">
      <div className="row align-items-center">
        {/* Left side – Text */}
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fw-bold">{productName}</h2>
          <p className="lead">{ProductDescription}</p>
        </div>

        {/* Right side – Image */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            // style={{ maxHeight: '300px', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightImage;
