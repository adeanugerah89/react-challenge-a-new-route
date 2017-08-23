import React, {Component} from 'react'
import Axios from 'axios'

class SearchFood extends Component{
  // constructor(){
  //   super()
  //   this.state = {
  //     listData: []
  //     }
  //   }
  // 
  submitForm = () => {
    let search = document.getElementById('SearchFood').value
    Axios.get(`https://developers.zomato.com/api/v2.1/search?entity_type=city&q=${search}`,{headers: {"user-key": "11b48b6100f1b0189c26982d4349d6d6"}})
    .then(res => {
      // console.log(res.data.restaurants[0].photos_url);
      // this.setState({
      //   listData: res.data.restaurants
      // })
    localStorage.setItem('listData',JSON.stringify(res.data.restaurants))
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  render() {
    return (
      <div className="container">
      <div className="columns is-mobile">
         <div className="column is-half is-offset-one-quarter">
          <div className="field">
            <div className="control">
              <input id="SearchFood" className="input" type="text" placeholder="Search your foods" />
              <button onClick={() => this.submitForm()} type="submit" className="button is-danger">SearchFood</button>
            </div>
          </div>
         </div>
        </div>
      </div>
    )
  }
}

export default SearchFood;