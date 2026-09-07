import { useState } from 'react'

import './App.css'
import Card from './card'
import Product from './product.json'


function App(){
    let items=[];
    items=Product.map((item)=>
        <Card 
        titleImage={item.image}
        titleText={item.title}
        titleDesc={item.desc}
        titlePrice={item.price}
        titleRating={item.rating}
        titleButton={item.buttonText} />

    );
    return(
        <div>
            <h1 className="headingStyle">Product Listing App</h1>
            {items}
        </div>
    )
}

export default App;





