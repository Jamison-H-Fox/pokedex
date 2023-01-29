import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { searchPokemon, randomPokemon, resetPokemon } from "../actions";

const StyledDiv = styled.div`
    width: 45%;
    margin: 2.5%;
    
    // & * {
    //     border: green 1px solid;
    // }

    & form {
        margin-top: 25vh;        
        display: flex;
        flex-direction: column;
        align-items: center;
        
        & * {
            margin: 2.5%;
        }

        & .button-row {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        & input {
            margin-top: 5%;
            width: 50%;
        }

        & button {
            border-radius: 5px;
        }
    }

    & error-container, p {
        text-align: center;
        color: red;
        font-size: 2rem;
    }

`

function SearchForm(props) {
    const [form, setForm] = useState({pokeName: ''});

    function handleChange(evt){
        const { name, type, value, checked } = evt.target;
        const updatedInfo = type === 'checkbox' ? checked : value;
        setForm({ ...form, [name]: updatedInfo })
    }

    function handleSubmit(evt){
        evt.preventDefault();
        props.searchPokemon(form.pokeName.toLowerCase());
        setForm({ pokeName: '' });
    }

    function handleRandom(evt){
        evt.preventDefault();
        props.randomPokemon();
        setForm({ pokeName: '' });
    }

    function handleReset(evt){
        evt.preventDefault();
        props.resetPokemon();
        setForm({ pokeName: '' });
    }

    return(
        <StyledDiv className="search-form">
            <form onSubmit={handleSubmit}>
                <input
                    value={form.pokeName}
                    name="pokeName"
                    type='text'
                    onChange={(evt) => handleChange(evt)}
                    placeholder="Search for a Pokémon here!"
                ></input>
                <div className="button-row">
                    <button>Catch it!</button>
                    <button onClick={handleRandom}>Random Pokémon</button>
                    <button onClick={handleReset}>Reset Pokémon</button>
                </div>
            </form>
            <div className="error-container">
                {props.errors ? <p className="erors-text">{props.errors}</p> : "" }
            </div>
        </StyledDiv>
    )
}

const mapStateToProps = state => {
    return{
        errors: state.errors
    }
}

export default connect(mapStateToProps, { searchPokemon, randomPokemon, resetPokemon })(SearchForm)