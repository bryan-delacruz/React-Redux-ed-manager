import React from "react";
import { connect } from "react-redux";
import cancha from "../cancha.svg";

const Titulares = ({ titulares, quitarTitular }) => {
  return (
    <section>
      <h2>Titulares</h2>
      <div className="cancha">
        {titulares.map((e) => (
          <article className="titular" key={e.id}>
            <div>
              <img src={e.foto} alt={e.nombre} />
              <button onClick={() => quitarTitular(e)}>X</button>
            </div>
            <p>{e.nombre}</p>
          </article>
        ))}
        <img src={cancha} alt="Cancha de fúltbol" />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const mapDispatchToProps = (dispatch) => ({
  quitarTitular(jugador) {
    dispatch({
      type: "QUITAR_TITULAR",
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
