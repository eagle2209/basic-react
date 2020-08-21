import * as React from 'react';
class SearchBar extends React.Component {
  state = {
    searchValue: '',
  };

  //child to parent
  onSearchFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
  };
  onSearchChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <div className='ui segment'>
        <form onSubmit={this.onSearchFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              value={searchValue}
              type='text'
              onChange={this.onSearchChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
