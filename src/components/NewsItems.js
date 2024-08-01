import React from 'react'

const NewsItems = (props) => {
        let { title, description, imageUrl, url, date, author } = props
        return (
            <div>
                <div className="card my-2">
                    <img src={imageUrl} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p class="card-text"><small class="text-body-secondary">By {author?author : "Unknown"} on {new Date(date).toDateString()}</small></p>
                        <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItems

