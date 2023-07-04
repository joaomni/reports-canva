import React from 'react';

import './style.css';

const Report = ({ name, link, report, id }) => {
    return (
      <>
        <div className='box-reports' id={id}>
          <iframe loading="lazy" src={report} />
        </div>

        <a href={link} target="_blank" rel="noopener"> Drive: Relatórios de {name}</a>
      </>
    );
}

export default Report;