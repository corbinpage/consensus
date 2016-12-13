import Handlebars from 'handlebars';

Handlebars.registerHelper('renderStars', function(starsRating) {
  let out = '';

  for(var i=0; i<starsRating; i++) {
    out = out + '<i class="fa fa-star text-warning"></i>';
  }

  return out;
});

export default Handlebars;