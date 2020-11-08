import React from 'react'

class SlidePanel extends React.Component {
  renderCart = () =>{
    return this.props.cart.map(item =>
      <div className="cartcontainer">
        <img src={item.frontimg}/>
        <div>
          <h3>{item.sku.name.toUpperCase()}</h3>
          <h3> Quantity: {item.quantity}</h3>
        </div>
      </div>
    )
  }

  renderCartOrAccount = () =>{
    if(this.props.clicking === "cart"){

      return(
        <div style={{marginTop:"60px"}}>
          <h1>Cart</h1>
          {this.renderCart()}
          <button id="logoutbutton">Checkout</button>
        </div>
      )

    }else if(this.props.clicking === "account"){

      return(
        <div style={{marginTop:"60px"}}>
          <h1>Account</h1>
          <button id="logoutbutton">Logout</button>
        </div>
      )

    }
  }

    render(){
        return(
            <div id="slidepanel" className={this.props.clickCart? "active":null}>
              {this.renderCartOrAccount()}
            </div>
        )
    }
}
export default SlidePanel
