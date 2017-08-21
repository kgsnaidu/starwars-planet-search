import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { doSearch } from '../actions';
import { FormGroup, FieldGroup, Button, FormControl, Form } from 'react-bootstrap';
import SearchResults from '../components/search-results'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }

        this._search = this._search.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.searchString.value === this.state.searchString) {
            this.setState({
                isLoading: false,
            })
        }
    }

    _search() {
        this.props.doSearch(this.searchString.value);
        this.setState({
            isLoading: true,
            searchString: this.searchString.value
        });
    }

    render() {
        const search = this.props.search;
        const { results = [] } = search;
        const { isLoading } = this.state;
         

        return (
            <section className='search-container row'>
                <div className=' col-md-8 col-md-offset-2'>
                    <FormGroup controlId='search'>
                        <FormControl type='text' bsSize="large" inputRef={ref => { this.searchString = ref }} onChange={this._search} placeholder="Seach Planets" />
                    </FormGroup>
                </div>
                <div className=' col-md-8 col-md-offset-2 results-label'>
                    { results.length || 0 } results out of { search.count || 0 }
                </div>
                {(!isLoading && <SearchResults {...search} />) ||
                    <div className=' col-md-6 col-md-offset-3'>
                        <img src='https://s-media-cache-ak0.pinimg.com/originals/58/4b/60/584b607f5c2ff075429dc0e7b8d142ef.gif' height='100px' width='100px' />
                    </div>
                }
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login,
        search: state.search
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        doSearch: doSearch
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);