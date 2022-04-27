import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import api from '../api';

import styled from 'styled-components';

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 0 40px;
`


class ItemsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            columns: [],
            isLoading: false
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllItems().then(items => {
            this.setState({
                items: items.data.data,
                isLoading: false
            })
        })
    }
    
    render() {
        const { items, isLoading } = this.state;
        console.log('TCL: ItemsList -> render -> items', items);

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Quantity',
                accessor: 'quantity',
                filterable: true,
            },
            {
                Header: 'Description',
                accessor: 'description',
                filterable: true,
            },
        ]

        let showTable = true;
        if (!items.length) {
            showTable = false
        };

        return (
            <Wrapper>
                { showTable && (
                    <ReactTable 
                        data = {items}
                        columns = {columns}
                        loading = {isLoading}
                        defaultPageSize = {10}
                        showPageSizeOptions = {true}
                        minRows = {0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ItemsList;
