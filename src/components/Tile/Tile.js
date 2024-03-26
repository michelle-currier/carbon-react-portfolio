import { Grid, Column, Tile } from '@carbon/react';


const TileSection = (props) => (
    <Grid className={`${props.className} tile-section`}>
      <Column sm={4} md={8} lg={16} xlg={16}>
        <h3 className='tile-section__heading'>{props.heading}</h3>
      </Column>
      {props.children}
    </Grid>
  );

const TileCard = (props) => {
    return (
        <Column sm={2} md={2} lg={4} xlg={3} className='tile-container'>
            
          <Tile>
                <h4 className="tile-card__heading">
                    {/* {`${splitHeading[0]} `}
                    <strong>{splitHeading[1]}</strong> */}
                    {props.heading}
                </h4>
                <p className="tile-card__body">{props.body}</p>
                
                {props.icon()}
                
          </Tile>
        </Column>
      );
    };
    
    export { TileSection, TileCard };