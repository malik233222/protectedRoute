import React from 'react'

export default function Images({classNames,src,alt,title,width,height}) {
    return (
        <img className={classNames} src={src} alt={alt} title={title} width={width} height={height} />
    )
}
