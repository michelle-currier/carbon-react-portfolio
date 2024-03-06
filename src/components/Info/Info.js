import { Grid, Column } from '@carbon/react';

// Take in a phrase and separate the third word in an array
function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' ');
  const thirdWord = splitPhrase.pop();
  return [splitPhrase.join(' '), thirdWord];
}

const InfoSection = (props) => (
  <Grid className={`${props.className} info-section`}>
    <Column md={8} lg={4} xlg={3}>
      <h3 className="info-section__heading">{props.heading}</h3>
    </Column>
    {props.children}
  </Grid>
);

const InfoCard = (props) => {
  const splitHeading = createArrayFromPhrase(props.heading);

  return (
    <Column sm={4} md={8} lg={4} className="info-card">
      <Grid>
        <Column sm={4} md={7} lg={4}>
          <h4 className="info-card__heading">
            {`${splitHeading[0]} `}
            <strong>{splitHeading[1]}</strong>
          </h4>
          <p className="info-card__body">{props.body}</p>
        </Column>
        <Column sm={4} md={1} lg={4}>
          {props.icon()}
        </Column>
      </Grid>
    </Column>
  );
};

export { InfoSection, InfoCard };
