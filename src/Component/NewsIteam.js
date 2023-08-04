import React from 'react'
import "./NewCss.css"

export default function NewsIteam(props) { 
        let { title, description, imageUrl, newsUrl, author, date , source} = props;
        return (
            <div>
                <div className="card my-4" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="" />
                    <div className="card-body">
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:1}}>
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">Author : {author}</p>
                        <p className="card-text">{new Date(date).toGMTString()}</p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        ) 
}
 
