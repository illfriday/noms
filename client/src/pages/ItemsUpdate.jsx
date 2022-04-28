
import React, { Component } from 'react';
import api from '../api';

import styled from 'styled-components';

const Title = styled.h1.attrs({
    className: 'h1'
})``

const Wrapper = styled.h1.attrs({
    className: 'form-group'
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control'
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: 'btn btn-primary'
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger'
})`
    margin: 15px 15px 15px 5px;
`

class ItemsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            quantity: '',
            description: ''
        };

        this.handleUpdateItem = this.handleUpdateItem.bind(this);
    }

    handleChangeInputName = async event => {
        const name = event.target.value;
        this.setState ({ name })
    }

    handleChangeInputQuantity = async event => {
        const quantity = event.target.validity.valid
            ? event.target.value
            : this.state.quantity
        this.setState ({ quantity })
    }

    handleChangeInputDescription = async event => {
        const description = event.target.value;
        this.setState ({ description })
    }

    handleUpdateItem = async () => {
        const { id, name, quantity, description } = this.state;
        const payload = { name, quantity, description }
        console.log(this)

        await api.updateItemById(id, payload).then(res => {
            window.alert('Item updated successfully.');
            this.setState({
                name: '',
                quantity: '',
                description: '',
            })
        })
    }
        
    componentDidMount = async () => {
        const { id } = this.state;
        const item = await api.getItemById(id);

        this.setState({
            name: item.data.data.name,
            quantity: item.data.data.quantity,
            description: item.data.data.description,
        })
    }

    render() {
        const { name, quantity, description } = this.state;

        return (
            <Wrapper>
                <Title>Update Item</Title>

                <Label>Name:</Label>
                <InputText 
                    type='text'
                    value= {name}
                    onChange= {this.handleChangeInputName}
                />

                <Label>Quantity:</Label>
                <InputText 
                    type='number'
                    min= '1'
                    value= {quantity}
                    onChange= {this.handleChangeInputQuantity}
                />

                <Label>Description:</Label>
                <InputText 
                    type='text'
                    value= {description}
                    onChange= {this.handleChangeInputDescription}
                />

                <Button onClick= {this.handleUpdateItem}>Add Item </ Button>
                <CancelButton href= {'/items/list'}>Cancel</ CancelButton>
            </Wrapper>
        )
    }
};

export default ItemsUpdate;