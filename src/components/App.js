import React from 'react';
import unsplash from '../api/unsplash';

import SearchBarSemanticUI from './SearchBarSemanticUI';
import SearchBarBlueprint from './SearchBarBlueprint';
import ImageList from './ImageList';

class App extends React.Component {
  state = {
    images: [],
    total_images: 0,
  };

  onSearchSubmit = async (searchValue) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: searchValue,
      },
    });

    this.setState({
      images: response.data.results,
      total_images: response.data.total,
    });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBarSemanticUI onSubmit={this.onSearchSubmit} />
        <SearchBarBlueprint onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
