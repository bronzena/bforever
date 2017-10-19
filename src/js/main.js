require("../css/style.css");
require("../scss/agency.scss");

import Typed from 'typed.js';

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    loop: true,
  });

  window.onload = function() {
    Particles.init({
      selector: '.background',
      color: '#acacac',
      maxParticles: 120,
      sizeVariations: 3,
      connectParticles: true,
      minDistance: 150,
    });
  };