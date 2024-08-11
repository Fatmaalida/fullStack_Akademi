import React, {useState, useEffect} from 'react';
import { ListGroup, ListGroupItem  } from 'reactstrap';

export default function Categories(props) {

    const [ categories, setcategories]= useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        let url = "http://localhost:3000/categories";
        fetch(url)
         .then((response) => response.json())
         .then((data) => setcategories(data));
    };
        


  return (
    <ListGroup>
      {categories.map((category) =>(
        <ListGroupItem 
        active={category.categoryName === props.currentCategory ? true : false}
        onClick={() => props.chanceCategory(category)}
        key={category.id}>
          {category.categoryName}
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}
