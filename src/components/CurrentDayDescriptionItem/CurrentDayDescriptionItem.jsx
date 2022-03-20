import React from 'react';

const CurrentDayDescriptionItem = ({name,value,unit}) => (
    <div className="d-flex justify-content-between">
        <p className="mb-0 font-weight-bolder text-uppercase">{name}</p>
        <p className="mb-0">
            {value}{unit}
        </p>
    </div>
);

export default CurrentDayDescriptionItem;
