import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import Card from "./Card";
import styled from "styled-components";

const CardsGrid = styled.div`
    display:grid;
    grid-template-columns: 25% 25% 25% 25%;
`;

const Favorites = ({myFavorites}) => {

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return (
        <>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select name="" id="" onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            <br /><br />
            <CardsGrid>
            {
                myFavorites?.map((fav) => {
                    return <Card key={fav.id} id={fav.id} name={fav.name} species={fav.species} 
                    gender={fav.gender} image={fav.image} /* onClose={() => onClose(fav.id)} *//>
                })
            }
            </CardsGrid>
        </>
        
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);