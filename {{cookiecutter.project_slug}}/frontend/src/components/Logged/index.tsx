import { Context } from '../../context/AuthContext';
import React, { useContext } from 'react';

const Logged = () => {
  const { loading, isAuthenticated } = useContext(Context);

  if (loading) {
    return <div>loading..</div>;
  }

  return (
    <div>
      <div>
        logado: {String(isAuthenticated)}
      </div>
    </div>
  );
};

export default Logged;
