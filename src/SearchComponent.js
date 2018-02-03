import React, { Component } from 'react';

class SearchComponent extends Component {
	constructor() {
		super();
		this.state = {
			searchWord: ""
		}
		this.updateSearchWord = this.updateSearchWord.bind(this);
		this._handleKeyPress = this._handleKeyPress.bind(this);
	}

	updateSearchWord(e) {
		this.setState({searchWord: e.target.value});
	}

	_handleKeyPress(e) {
		if (e.key === 'Enter') {

	      window.location = '/search/'+this.state.searchWord;
	    }
	}
	render() {
		return (
			<div>
				<a href={`/search/${this.state.searchWord}`}>
					<img src="https://www.foodfocusthailand.com/images/icons/ic-search.svg" alt="search" />
				</a>
	  			<div className="search-input">
	          		<input value={this.state.searchWord} type="text" onChange={this.updateSearchWord} onKeyPress={this._handleKeyPress} placeholder="Search..." />
	  			</div>
	  		</div>
		)
	}

}

export default SearchComponent;