import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import css from './CardTemplate.module.css'

export default function CardTemplate({ data, callback }) {
  return (
    <Card
      border="dark"
      text="secondary"
      bg="warning"
      className="mb-4 border-2"
      style={{ width: "15rem", minHeight: "28rem", overflow: "hidden" }}
    >
      <Card.Header className={css.cardHeader}>
        <h4>{data.name.toUpperCase()}</h4> <h4 className={css.cardId}>{data.order}</h4>
      </Card.Header>
      <Card.Img
        variant="top"
        src={data.sprites.other["official-artwork"].front_default}
      />
      <Card.Body>
        <Card.Title>Abilities:</Card.Title>
        <Card.Text as="div">
          <ul ref={callback}>
            {data.abilities.map((ability) => (
              <li key={ability.ability.name}>
                {ability.ability.name[0].toUpperCase() +
                  ability.ability.name.substr(1)}
              </li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

CardTemplate.propTypes = {
  data: PropTypes.shape({
    sprites: PropTypes.object,
    abilities: PropTypes.array,
    name: PropTypes.string,
    order: PropTypes.number
  }),
  callback: PropTypes.func
};
