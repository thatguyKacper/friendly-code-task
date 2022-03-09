import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
    };
  }
  render() {
    const handleFilter = (e) => {
      const searchDesc = e.target.value;
      const searchFilter = this.props.data.filter((value) => {
        return value.description
          .toLowerCase()
          .includes(searchDesc.toLowerCase());
      });
      if (searchDesc === '') {
        this.setState({ search: [] });
      } else {
        this.setState({ search: searchFilter });
      }
    };

    return (
      <div className="search">
        <input
          type="text"
          placeholder={this.props.placeholder}
          onChange={handleFilter}
        />
        {this.state.search.length !== 0 && (
          <div className="data">
            {this.state.search.map((desc) => {
              return (
                <div className="resultItem" key={desc.work_order_id}>
                  {desc.description}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default SearchBar;
