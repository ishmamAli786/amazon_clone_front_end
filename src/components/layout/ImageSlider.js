import React from 'react'

function ImageSlider() {
    return (
        <>
            {/*-Image Slider Start*/}
            <div id="amazonImageSlider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <a href="http://www.google.com"><img src="assets/img/slider/img2.jpg" className="d-block w-100" alt="image" width={150} height={400} /></a>
                    </div>
                    <div className="carousel-item">
                        <a href="http://www.google.com"><img src="assets/img/slider/img2.jpg" className="d-block w-100" alt="image" width={150} height={400} /></a>
                    </div>
                    <div className="carousel-item">
                        <a href="http://www.google.com"><img src="assets/img/slider/img2.jpg" className="d-block w-100" alt="image" width={150} height={400} /></a>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#amazonImageSlider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#amazonImageSlider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>{/*-Image Slider End*/}
        </>
    )
}


export default ImageSlider;