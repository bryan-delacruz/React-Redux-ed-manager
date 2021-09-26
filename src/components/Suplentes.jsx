import React from "react";
import { connect } from "react-redux";

const Suplentes = ({ suplentes, quitarSuplente }) => {
  return (
    <section>
      <h2>Suplentes</h2>
      <div className="suplentes">
        {suplentes.map((e) => (
          <article className="suplente" key={e.id}>
            <div>
              <img src={e.foto} alt={e.nombre} />
              <button onClick={() => quitarSuplente(e)}>X</button>
            </div>
            <p>{e.nombre}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  suplentes: state.suplentes,
});

const mapDispatchToProps = (dispatch) => ({
  quitarSuplente(jugador) {
    dispatch({
      type: "QUITAR_SUPLENTE",
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
