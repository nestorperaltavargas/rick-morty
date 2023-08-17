import Card from './Card';
import styled from "styled-components";

const CardsGrid = styled.div`
   display:grid;
   grid-template-columns: 25% 25% 25% 25%;
`;

export default function Cards({characters, onClose}) {
   
   return(
      <CardsGrid>
         {
            characters.map(({id, name, species, gender, image}) => {
               return <Card key={id} id={id} name={name} species={species} 
               gender={gender} image={image} onClose={() => onClose(id)}/>
            })
         }
      </CardsGrid>
   );
}
