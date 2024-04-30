import React from 'react';

const Compra =({ onPurchase }) => {
  return (
    <div className="modal-body">
      {/* Aquí puedes añadir la lógica para comprar el evento */}
      <button onClick={onPurchase}>Comprar</button>
    </div>
  );
}

export default Compra;