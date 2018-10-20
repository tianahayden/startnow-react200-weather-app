import React from 'react';

export default class DisplayPicture extends React.Component {
    constructor(props) {
        super(props);
        this.getRandomInt = this.getRandomInt.bind(this);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    render() {
        const { category, description, temperature } = this.props;
        const rainArr = [
            'https://images.unsplash.com/photo-1515856370-b45b6bd920f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=acee78991d40b353dde947a8be62e25f&auto=format&fit=crop&w=1500&q=80',
            'https://images.unsplash.com/photo-1516368694098-47836cebec97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e873fda9cda41a8909683e6f09d3bf3b&auto=format&fit=crop&w=692&q=80',
            'https://images.unsplash.com/photo-1518182170546-07661fd94144?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8bed49ff1eadbbe3813b9134c972317b&auto=format&fit=crop&w=668&q=80',
        ]
        const highTempArr = [
            'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-0.3.5&s=06dfafbc983cef162b78e88370a57150&auto=format&fit=crop&w=668&q=80',
            'https://images.unsplash.com/photo-1524005418018-9bd2a4d1067d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4f80d14b5217f6372c52758acfbeb4&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1518674728837-4c4904fd5d0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f895721ec01be686e4c840f7b0884bef&auto=format&fit=crop&w=668&q=80',
        ]
        const fallTempArr = [
            'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=81356cb248209662ce245e1ef072243d&auto=format&fit=crop&w=708&q=80',
            'https://images.unsplash.com/photo-1485811807442-1873d5016e61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e7cd24e5fdcd96fb7b9300d471ee8d7&auto=format&fit=crop&w=668&q=80'
        ]


        if (this.props.toggle === true) {
            let image = '';
            if (category == 'Rain' || category == 'Drizzle') {
                image = rainArr[this.getRandomInt(3)]
            }

            if (temperature > 70) {
                image = highTempArr[this.getRandomInt(3)]
            }
            else if (temperature > 55) {
                image = fallTempArr[this.getRandomInt(2)]
            }

            return (
                <div>
                    <div className='card border border-info mb-4'>
                        <div className='card-header bg-info text-white'>
                            Weather Details
</div>
                        <div className='card-body text-center'>
                            <div className='row'>
                                <div className='col'>
                                    <p>Category: {category}</p>
                                    <p>Description: {description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card border border-info mb-4'>
                        <div className='card-header bg-info text-white'>
                            Outfit Suggestion
</div>
                        <div className='card-body text-center'>
                            <div className='row'>
                                <div className='col'>
                                    <img className='img-fluid' src={image} alt='outfit' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

// Category
// Thunderstorm
// Drizzle
// Rain
// Snow
// Atmosphere
// Clear
// Clouds

