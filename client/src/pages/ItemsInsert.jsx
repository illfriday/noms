
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
    margin: 15px 15px 15px 15px;
`

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger'
})`
    margin: 15px 15px 15px 15px;
`

class ItemsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            quantity: '',
            //need to make sure we are expecting a number
            description: '',
        }
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

    handleIncludeItem = async () => {
        const { name, quantity, description } = this.state;
        const payload = { name, quantity, description };
        console.log('in handleIncludeBlock')

        await api.insertItem(payload).then((res) => {
            window.alert(`Item added successfully! :)`);
            this.setState({
                name: '',
                quantity: '',
                description: ''
            })
        })
    }

    render() {
        const { name, quantity, description } = this.state;
        return (
            <Wrapper>
                <Title>Create Item</Title>

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

                <Button onClick= {this.handleIncludeItem}>Add Item </ Button>
                <CancelButton href= {'/items/list'}>Cancel</ CancelButton>
            </Wrapper>
            
        )
    }
};

export default ItemsInsert;