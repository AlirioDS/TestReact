import React from 'react'
import Axios from 'axios'
import Pagination from "react-js-pagination"

import Color from './Color'
import './styles/colorList.css'

class ColorList extends React.Component {
  state = {
    loading: true,
    error: null,
    colors: [],
    total: null,
    per_page: null,
    current_page: null,
    total_page: null
  }

  componentDidMount() {
    this.setState({ loading: true, error: null })
    this.getColors()
  }

  getColors(pageNumber) {
     Axios.get(pageNumber == undefined ? 'https://reqres.in/api/colors' : `https://reqres.in/api/colors?page=${pageNumber}`)
    .then(res => {
      this.setState({ 
        loading: false,
        colors: res.data.data,
        total_colors: res.data.total,
        colors_per_page: res.data.per_page,
        current_page: res.data.page,
        total_page: res.data.total_pages
      })
    })
    .catch(error => {
      this.state({ loading: false, error })
    })
  }

  handlePageChange(pageNumber) {
    this.getColors(pageNumber)
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <Color colors={this.state.colors} loading={this.state.loading} />
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 p-3" >
            <div className="d-flex justify-content-center">
              <Pagination
                hideNavigation
                itemClass="page-item"
                linkClass="page-link"
                activePage={this.state.current_page}
                itemsCountPerPage={this.state.colors_per_page}
                totalItemsCount={this.state.total_colors}
                onChange={this.handlePageChange.bind(this)}
              />
              </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ColorList
