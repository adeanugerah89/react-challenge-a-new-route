import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class List extends Component {
  constructor() {
    super()
    this.state = {
      listData: []
    }
  }
  
  // getListData() {
  //   if(localStorage.getItem('listData') !== null) {
  //     JSON.parse(localStorage.getItem('listData')).forEach(data => {
  //       this.state.listData.push(data)
  //     })
  //   } else {
  //     console.log('data kosong');
  //   }
  // }
  
  componentWillMount() {
    if(localStorage.getItem('listData') !== null) {
      JSON.parse(localStorage.getItem('listData')).forEach(data => {
        this.state.listData.push(data)
      })
    } else {
      console.log('data kosong');
    }
    console.log('================');
  }
  
  render() {
    var data = this.state.listData
    return (
      <div className="container">
      {
        data.map((item,idx) => {
          return (
            <div className="columns" key={idx}>
              <div className="column is-medium" id="listBugs">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                    nama Makanan: {item.restaurant.name}
                    </p>
                  </header>
                  <footer className="card-footer">
                    <Link to={{
                      pathname: `/Detail/${item.restaurant.id}`,
                      state: {item: item}
                    }}>Detail</Link>
                  </footer>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    )
  }
  
}

export default List;