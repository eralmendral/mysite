import React from 'react';
import Particles from 'react-particles-js';
import reactlogo from './assets/images/reactlogo.png'
import angularlogo from './assets/images/angularlogo.png'
import vuelogo from './assets/images/vuelogo.png'
import sveltelogo from './assets/images/sveltelogo.png'

const ParticleEffect = () => (
    <Particles
    style={{ position: 'absolute'}}
    params={{
	    "particles": {
	        "number": {
	            "value": 12,
	            "density": {
	                "enable": true,
	                "value_area": 1000
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 2,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	                "circle"
	            ],
	            "image": [
	                {
	                    "src": `${reactlogo}`,
	                    "height": 15,
	                    "width": 23
	                },
	                {
                        "src": `${angularlogo}` ,
	                    "height": 15,
	                    "width": 15
	                },
	                // {
	                //     "src": `${vuelogo}`,
	                //     "height": 15,
	                //     "width": 15
                    // },
                    // {
	                //     "src": `${sveltelogo}`,
	                //     "height": 15,
	                //     "width": 15
	                // }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": true
	}} />
)

export default ParticleEffect;