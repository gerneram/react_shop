import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      currentItems:[],
      items: [
         {
          id:1,
          title:'Chair gray',
          img:'stul.jpg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          category:'chairs',
          price:'39.20'
         },
         {
          id:2,
          title:'table white',
          img:'stol.jpg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          category:'tables',
          price:'69.15'
         },
         {
          id:3,
          title:'sofa',
          img:'divan.jpg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          category:'sofas',
          price:'149.00'
         },
         {
          id:4,
          title:'Lamp',
          img:'lampa.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          category:'lamps',
          price:'49.25'
         },
         {
          id:5,
          title:'Bad',
          img:'krovat.jpg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          category:'bads',
          price:'199.00'
         },


      ],
      showFullItem: false,
      fullItem:{}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
      <Header orders = {this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory = {this.chooseCategory}/>
      <Items onShowItem ={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

      {this.state.showFullItem && <ShowFullItem item = {this.state.fullItem} onAdd={this.addToOrder} onShowItem ={this.onShowItem}/>}
      <Footer />
    
    
    </div>
  );
}

  onShowItem(item){
    this.setState({fullItem:item})
    this.setState({showFullItem: !this.state.showFullItem})
  }


  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems:this.state.items})
      return
    }

    this.setState({
      currentItems:this.state.items.filter(el =>el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el =>{
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
