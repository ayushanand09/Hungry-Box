import React, {useState} from "react";
// const global 
const ItemCard = ({ item, totalCost, setTotalCost }) => {

    const [stock1, setStock1] = useState(0)
    // const [stock2, setStock2] = useState(stock1)

    const [total,setTotal] = useState(0)
    const [currentStock, setCurrentStock] = useState(item.stock);
    // var total;
    
    const increment = async () => {

        let value1 = stock1;
        setStock1(++value1)
        console.log("Original stock: ", item.stock);

        let currentStock = item.stock - value1;
        setCurrentStock(currentStock)
        console.log("Current Stock: ",currentStock);
        
        let total = value1 * item.price;
        setTotal(total)
        setTotalCost(totalCost+item.price)
        
        if(stock1 >= 1) {
            total = stock1 * item.price;
            console.log("Cost: ", total)
        }

        console.log("Item Name: ", item.name);
        value1++;
        // value = parseInt(document.getElementById('number').innerText); // stack val
        const obj = {
          "stock": currentStock
        }
        // console.log("item id: ", item._id);
        // console.log("Current Stock: ", stock1-value1);
        const res = await fetch(`http://localhost:4000/api/v1/admin/product/${item._id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(obj)
          });
    
        // setStock(value)
        // console.log("value: ", value)
        // const currentStock = item.stock - value;
        // console.log(currentStock);
        // document.getElementById('quantity').innerText = currentStock;
        // const obj = {
        //   "stock": stock-value
        // }
        // console.log("item id: ", item._id);
        // console.log("Current Stock: ", stock-value);
        // const res = await fetch(`http://localhost:4000/api/v1/admin/product/${item._id}`, {
        //   method: "PUT",
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        //   },
        //   credentials: "include",
        //   body: JSON.stringify(obj)
        //   });
      }
      const decrement = async () => 
      {
        let value = stock1; // 10
        if(stock1!=0)
        {
          setStock1(--value);
          setCurrentStock(currentStock+1);
          let total = value * item.price;
          setTotal(total)
          setTotalCost(totalCost-item.price)

          const obj = {
            "stock": currentStock+1
          }
        //   console.log("item id: ", item._id)
          const res = await fetch(`http://localhost:4000/api/v1/admin/product/${item._id}`, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(obj) 
            });
        }
        console.log(stock1);
        
        // if(value>0){
        //   setStock1(--value); // 9
          
        //   // var currentStock = item.stock - value;
        //   // setCurrentStock(currentStock)

        //   // console.log("current stock:", currentStock);
          
        //   let total = value * item.price;
        //   setTotal(total)
        //   setTotalCost(totalCost-item.price)
        // }

        // var value = stock; // stock val
        // console.log("item name: ", item.name)
        // if(value > 1){
        //   value--;
         
            
            // setStock1(value)
    
        //   document.getElementById('number').innerText = value;
        // }
        // console.log("value: ", value)
      }

  return (
    <>
      <div className="order-card">
        <img
          className="card-img-top"
          src={require("./food.jpg")}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title" style={{fontSize: "1.5rem"}}>
            {item.name}
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <br />
            <h5>Price: {item.price}</h5>
            {/* <h5>Current Stock: {item.stock}</h5> */}
            <h5>Stock Available: {currentStock}</h5>
          </p>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => {
                decrement();
              }}
            >
              -
            </button>
            <button type="text" class="btn btn-secondary" name="quantity" maxLength="2" max="10" size="1" id="number">{stock1}
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => {
                increment();
              }}
            >
              +
            </button>
          </div>
          <br></br>
          <div> Subtotal: {total} </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;