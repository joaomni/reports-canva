import React from 'react';

import './style.css';

const Report = ({ id, PDF, Drive, Name,}) => {
    return (
      <>
        <div className='box-reports' id={id}>
          <iframe loading="lazy" src={PDF} />
        </div>

        <a href={Drive} target="_blank" rel="noopener"> Drive: Relatórios de {Name}</a>
      </>
    );
}

export default Report;