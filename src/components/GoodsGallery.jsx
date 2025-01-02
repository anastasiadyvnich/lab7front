import React from 'react';
import {GoodsCard} from './GoodsCard';
import goodsData from '../data/data';

function GoodsGallery() {
  return (
    <div className="goods-gallery">
      {goodsData.map((item) => (
        <GoodsCard
			key={item.id}
			image={item.image}
			title={item.title}
			price={item.price}
        />
      ))}
    </div>
  );
}

export default GoodsGallery;