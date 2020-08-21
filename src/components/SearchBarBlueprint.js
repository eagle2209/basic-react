import * as React from 'react';
import { InputGroup, FormGroup } from '@blueprintjs/core';
import './SearchBarBlueprint.css';

class SearchBar2 extends React.Component {
  state = {
    searchValue: '',
  };

  handleSearchChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  //child to parent
  handleSearchSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className='ui segment'>
        <form onSubmit={this.handleSearchSubmit}>
          <FormGroup>
            <InputGroup
              disabled={false}
              large={true}
              leftIcon='search'
              onChange={this.handleSearchChange}
              placeholder='Search cars...'
              value={searchValue}
            />
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default SearchBar2;
