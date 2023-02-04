import React, { FC } from 'react';
import "./techbadge.scss"

type Props = {

    title: string
    classes?: string;
}

const Techbadge: FC<Props>= ({ title, classes }) => {

    return (
        <>
        <div className={`badge ${classes? classes: ""}`}>
            <p className="badge-text">
                {title}
            </p>
        </div>
        </>
    )
}

export default Techbadge;



