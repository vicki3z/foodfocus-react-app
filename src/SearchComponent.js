import React, { Component } from 'react';

class SearchComponent extends Component {
	constructor() {
		super();
		this.state = {
			searchWord: ""
		}
		this.updateSearchWord = this.updateSearchWord.bind(this);
	}

	updateSearchWord(e) {
		this.setState({searchWord: e.target.value});
	}
	render() {
		return (
			<form action="#" method="get" name="search-form" id="search-form">
				<a href={`/search/${this.state.searchWord}`} target="_blank">
					<img src="https://www.foodfocusthailand.com/images/icons/ic-search.svg" alt="search" />
				</a>
      			<div className="search-input">
              		<input value={this.state.searchWord} type="text" name="search-input" id="search-input" onChange={this.updateSearchWord} placeholder="Search..." />
      			</div>
			</form>
		)
	}

}

export default SearchComponent;