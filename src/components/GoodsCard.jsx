import React from 'react';

export const GoodsCard = ({ image, title, price }) => {
  return (
    <div className="goods-card">
		<header>
		  <img src={image} alt={title} />
		</header>
		<h3>{title}</h3>
		<p>ціна: {price} грн</p>
    </div>
  );
};
