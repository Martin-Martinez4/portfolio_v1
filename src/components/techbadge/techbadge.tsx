import React, { FC } from 'react';
import "./techbadge.scss"

type Props = {

    classes?: string;
}

const Techbadge: FC<Props>= ({ classes }) => {

    return (
        <div className={`badge ${classes? classes: ""}`}>
            <span>
                Title
            </span>
        </div>
    )
}

export default Techbadge;



