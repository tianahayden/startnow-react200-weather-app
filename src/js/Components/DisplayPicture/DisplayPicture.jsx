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
        const snowArr = [
            'https://images.unsplash.com/photo-1530204300372-1eddee84dfb9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0430bd1f2ee5061c838d4d23ef2e3d71&auto=format&fit=crop&w=1500&q=80',
            'https://images.unsplash.com/photo-1482474800037-6a26fa1c72ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=58117c32c84a96abb1cc84b1c8dcd0d8&auto=format&fit=crop&w=1498&q=80',
            'https://images.unsplash.com/photo-1485016769068-f82050eb4757?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2633a69fdc0dfa4ea428d90372e18fe9&auto=format&fit=crop&w=668&q=80'
        ]
        const highTempArr = [
            'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-0.3.5&s=06dfafbc983cef162b78e88370a57150&auto=format&fit=crop&w=668&q=80',
            'https://images.unsplash.com/photo-1516908205727-40afad9449a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16e280425864dd1605e795e8482d97f6&auto=format&fit=crop&w=670&q=80',
            'https://images.unsplash.com/photo-1518674728837-4c4904fd5d0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f895721ec01be686e4c840f7b0884bef&auto=format&fit=crop&w=668&q=80',
        ]
        const fallTempArr = [
            'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=81356cb248209662ce245e1ef072243d&auto=format&fit=crop&w=708&q=80',
            'https://images.unsplash.com/photo-1485811807442-1873d5016e61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e7cd24e5fdcd96fb7b9300d471ee8d7&auto=format&fit=crop&w=668&q=80',
            'https://images.unsplash.com/photo-1478106987981-682da13128d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dcb14642f2667cfd462844b8db5d01a4&auto=format&fit=crop&w=1500&q=80'
        ]
        const winterTempArr = [
            'https://images.unsplash.com/photo-1520661153773-2144854655c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ac27a5b1da1883542ddb9ab93eab7fb&auto=format&fit=crop&w=1500&q=80',
            'https://images.unsplash.com/photo-1520979649088-31863890dfe9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2802af28d25d295280b60eb53c1a83d7&auto=format&fit=crop&w=1500&q=80',
            'https://images.unsplash.com/photo-1459983894721-ed12c180d569?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a705013443ef86fbed6b7393f888209b&auto=format&fit=crop&w=1502&q=80'
        ]
        const lowTempArr = [
            'https://images.unsplash.com/photo-1519342885256-48793c97ee37?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bab56fd90a4a114cc92f36bba2182814&auto=format&fit=crop&w=1500&q=80',
            'https://images.unsplash.com/photo-1536761729229-2780f9fa33b9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43c685b7314f409717b19865d303a5bc&auto=format&fit=crop&w=1480&q=80',
            'https://images.unsplash.com/photo-1516242034-926cb2756812?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b5fe54c91e540d95425deb6a6af73a8&auto=format&fit=crop&w=1500&q=80'
        ]


        if (this.props.toggle === true) {
            let image = '';
            let output = '';
            if (category == 'Rain' || category == 'Drizzle') {
                image = rainArr[this.getRandomInt(3)]
                output = 'Better get your umbrella!'
            }
            else if (category == 'Snow') {
                image = snowArr[this.getRandomInt(3)]
                output = 'What is it called when a snowman has a temper tantrum? ... A meltdown'
            }
            else if (category == 'Clear' || category == 'Clouds') {
                if (temperature > 70) {
                    image = highTempArr[this.getRandomInt(3)]
                    output = 'Warm weather hoorah!'
                }
                else if (temperature > 55) {
                    image = fallTempArr[this.getRandomInt(3)]
                    output = 'Mild temperature... not bad'
                }
                else if (temperature > 40) {
                    image = winterTempArr[this.getRandomInt(3)]
                    output = "Grab your coat, it is chilly"
                }
                else {
                    image = lowTempArr[this.getRandomInt(3)]
                    output = "Brr it is cold outside. Maybe don't leave the house?"
                }
            }
            else {
                image = 'severeweather.jpg'
                output = "Severe weather. Please take appropriate precautions"
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
                                    <p>{output}</p>
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
                                    <img className='img-fluid' src={image} />
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

