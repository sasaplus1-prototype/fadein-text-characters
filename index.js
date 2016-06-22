(function(){

  'use strict';

  var textarea = document.getElementById('js-textarea'),
      execute = document.getElementById('js-execute'),
      result = document.getElementById('js-result');

  execute.addEventListener('click', function() {
    var animationEnd, text, span, chars, fragment;

    animationEnd = function(event) {
      event.target.style.opacity = 1;
    };

    text = textarea.value;

    span = document.createElement('span');
    span.style.opacity = 0;

    chars =
      text
        .split('')
        .map(function(c, index) {
          var sec, s;

          sec = (index + 1) / 50;

          s = span.cloneNode(false);

          s.innerHTML = c;

          s.style.webkitAnimationDelay = sec + 's';
          s.style.mozAnimationDelay = sec + 's';
          s.style.animationDelay = sec + 's';

          s.classList.add('js-fadein');

          s.addEventListener('webkitAnimationEnd', animationEnd, false);
          s.addEventListener('mozAnimationEnd', animationEnd, false);
          s.addEventListener('animationend', animationEnd, false);

          return s;
        });

    fragment = document.createDocumentFragment();

    chars.forEach(function(c) {
      fragment.appendChild(c);
    });

    result.innerHTML = '';
    result.appendChild(fragment);
  }, false);

}());
