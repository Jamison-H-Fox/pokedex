import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledDiv = styled.div`
    width: 33%;
    margin: 2.5%;
    padding-bottom: 46%;
    background-color: #ffe165;
    border-radius: 30px;
    position: relative;
    top: 0px;
    left: 0px;
    z-index: 0;

    & .type-color {
        width: 92.5%;
        height: 93.875%;
        // background-color: #9a63ab;
        border-radius: 10px;
        position: absolute;
        top: 3%;
        left: 3.75%;
        z-index: 1;

        & .poke-name {
            margin-left: 3.75%;
            text-align: left;
        }

        & .poke-img-background {
            background-color: lemonchiffon;
            border: 3px solid darkgrey;
            width: 90%;
            padding-bottom: 64%;
            position: absolute;
            margin-top: 0%;
            left: 5%;
            z-index: 2;
        }
        
        & .poke-img {            
            width: 90%;
            padding-bottom: 64%;
            position: relative;
            margin-top: 0%;
            left: 5%;
            z-index: 3;
        }

        & .stats {
            text-align: center;
            margin-top: 2.5%;
            font-size: 0.75rem;
        }

        & .abilities {
            font-size: 1.5rem;
            text-align: left;
            margin: 5% 0 10% 5%;
        }
    }
`

function PokeCard(props) {
    const capitalize = str => {
        if (typeof str === 'string') {
            return str.replace(/^\w/, c => c.toUpperCase())
        } else {
            return ''
        }
    }

    function colorPicker(pokeType) {
        let cardColor = '';
        switch(pokeType) {
            case 'psychic':
                return cardColor = '#9a63ab';
            case 'poison':
                return cardColor = '#764a83';
            case 'ghost':
                return cardColor = '#9a63ab';
            case 'grass':
                return cardColor = '#9ac843';
            case 'bug':
                return cardColor = '#9ac843';
            case 'electric':
                return cardColor = '#f3bf1b';
            case 'fire':
                return cardColor = '#e63e20';
            case 'water':
                return cardColor = '#00a2db';
            case 'ice':
                return cardColor = '#00a2db';
            case 'dragon':
                return cardColor = '#6b6e30';
            case 'rock':
                return cardColor = '#d3772b';
            case 'fighting':
                return cardColor = '#d3772b';
            case 'ground':
                return cardColor = '#d3772b';
            case 'normal':
                return cardColor = '#e9eaeb';
            case 'flying':
                return cardColor = '#e9eaeb';
            case 'steel':
                return cardColor = '#a9b1b5';
            case 'fairy':
                return cardColor = '#e55096';
            case 'dark':
                return cardColor = '#0d0c0d';
        };
    }

    return (
        <StyledDiv className="pokecard">
            <div className="type-color" style={{backgroundColor: colorPicker(props.type)}}>
                <h2 className="poke-name" style={{color: props.type === 'dark' ? '#d2cdcc' : '' }}>{capitalize(props.name)}</h2>
                <div className="poke-img-background" 
                    style={{
                        backgroundImage: `url(${props.imgURL})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <div className="poke-img"></div>
                <p className="stats" style={{color: props.type === 'dark' ? '#d2cdcc' : '' }}>NO. {props.id} HT {props.height} ft WT {props.weight} lbs</p>
                {props.abilities.map(ability => {
                    return <p key={ability.id} className="abilities" style={{color: props.type === 'dark' ? '#d2cdcc' : '' }}>{capitalize(ability.ability)}</p>
                })}
            </div>
        </StyledDiv>
    )
}

const mapStateToProps = (state) => {
    return{
        name: state.pokemon.name,
        type: state.pokemon.type,
        imgURL: state.pokemon.imgURL,
        id: state.pokemon.id,
        height: state.pokemon.height,
        weight: state.pokemon.weight,
        abilities: state.pokemon.abilities
    }
}

export default connect(mapStateToProps, {})(PokeCard);