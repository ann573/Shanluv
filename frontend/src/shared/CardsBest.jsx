import React from 'react';
import { Card } from 'reactstrap';

import './cardbest.css';

const CardsBest = ({ product }) => {
  const {photo} = product;

  return (
    <div className="product_card mt-3">
      <Card className="product-card">
        <div className="product_img">
          <img src={photo} alt="product-img" />
        </div>
      </Card>
    </div>
  );
};

export default CardsBest;
