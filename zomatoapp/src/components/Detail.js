import React ,{Component} from 'react'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state= {
      item: props.location.state.item
    }
  }
  
  render() {
    console.log(this.state.item, "kkjllk");
    let data = this.state.item
    return(
      <div className="card-content">
        <div className="content">
        <img src={data.restaurant.featured_image} alt="" width="300"/><br/>
          Rating: {data.restaurant.user_rating.votes}<br/>
          alamat: {data.restaurant.location.address}<br/>
          kisaran harga untuk berdua: Rp.{data.restaurant.average_cost_for_two}
        </div>
      </div>
    )
  }
}

export default Detail;