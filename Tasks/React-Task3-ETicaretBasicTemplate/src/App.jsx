
import {useState,useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from './Header';
import Products from './Products';
import Categories from './Categories';


function App() {
  const [currentCategory, setCurrentCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts=(categoryId)=>{
    let url ="http://localhost:3000/products";
    if(categoryId){
      url += "?categoryId=" + categoryId;
    }
  
    fetch(url)
     .then((response)=>response.json())
     .then((data)=>setProducts(data));
  };

  const chanceCategory = (category) => {
    setCurrentCategory(category.categoryName);
    getProducts(category.id);
   
     
  }

  useEffect(() => {
    getProducts();
  }, []);

  const addtocart = (product) => {
    let newcart = [...cart];
    let addedItem = newcart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity+=1;
    } else {
      newcart.push({ product:product, quantity: 1 });
    }
    setCart(newcart);

    // console.log(cart);

  }

  const removetocart = (product)=> {
    let newcart = cart.filter((c) => c.product.id !== product.id);
    setCart(newcart);
    // console.log(cart);
  }
 

  return (
    <Container>
        <Header  cart={cart}  removetocart={removetocart} />
          <Row>
            <Col xs="3">
              <Categories chanceCategory={chanceCategory} currentCategory={currentCategory} />
            </Col>
            <Col xs="9">
               <Products products={products}
               currentCategory={currentCategory}
               addtocart = {addtocart} />
            </Col>
          </Row>
    </Container>
  )
}

export default App
