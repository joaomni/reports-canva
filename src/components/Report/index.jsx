import React from 'react';

import './style.css';

const Report = ({ PDF, Drive, Name,}) => {
    return (
      <>
        <div className='box-reports'>
          <iframe loading="lazy" src={PDF} />
        </div>

        <a href={Drive} target="_blank" rel="noopener">Relatórios de {Name}</a>
      </>
    );
}

export default Report;