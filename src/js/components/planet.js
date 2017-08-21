import React from 'react';

const Planet = (props) => {
    const { name, population, gravity, climate, diameter } = props;

    return (
            <div className='planet col-sm-6 col-md-4'>
                <div className='thumbnail'>
                    <img src='http://designingflicks.com/images/earth-svg-17.png' />
                    <div className='caption'>
                        <h3 className='planet-name'>{ name }</h3>
                        <br />
                        <p><span className='glyphicon glyphicon-globe'/><b>Diameter: </b>{ diameter }</p>
                        <p><span className='glyphicon glyphicon-user'/><b>Population: </b>{ population }</p>
                        <p><span className='glyphicon glyphicon-cloud'/><b>Climate: </b>{ climate }</p>
                        <p><span className='glyphicon glyphicon-object-align-vertical'/><b>Gravity: </b>{ gravity }</p>
                        <br/>
                        <p className='actions'>
                            <a href='#' className='btn btn-link' role='button'>More</a>
                        </p>
                    </div>
                </div>
            </div>
        );
}

export default Planet;