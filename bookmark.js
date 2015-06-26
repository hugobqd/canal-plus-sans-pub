javascript: (function() {
  if (location.href.indexOf("?vid=") == -1) { 
  	/* Pas d'ID de video ds URL: charger lien 1re vignette */
    var url = $('._thumbs.current').first().find('a').attr('href');
  } else { 
  	/* ID video ds URL*/
    var url = location.href;
  }

  function charger(vid) {
    console.log('charger : ', vid);
    $('.playerVideo').html('<div style="outline: 10px dotted yellow;"><iframe webkitallowfullscreen mozallowfullscreen allowfullscreen width="640" height="360" frameborder="0" scrolling="no" src="http://player.canalplus.fr/embed/?param=cplus&vid=' + vid + '"></iframe></div').css({
      'box-shadow': '0 0 10px yellow',
      'position': 'relative'
    });
  }

  charger(url.split("?vid=")[1]);

  var thumbLink = $('._thumbs a, .thumbs a');

  /* Vignettes : supprimer propriété click existantes */
  thumbLink.each(function() {
    $(this).attr('onclick', '');
    $(this).attr('data-href', $(this).attr('href'));
    $(this).attr('href', '#');
  }); 
  /* Vignettes : au click, charger video */
  thumbLink.on('click', function(e) {
    e.preventDefault();
    charger($(this).attr('data-href').split('?vid=')[1]);
  }); 
  /* Si on double click, on change de page */
  thumbLink.on('dblclick', function() {
    window.location.href = $(this).attr('data-href');
  });
  $('body').append('<div style=" position: fixed; z-index: 1000; top: 33px; left: 36px; background-color: rgb(249, 255, 13); padding: 0.3em 0.5em 0.2em; color: #000; font-size: 25px; text-transform: uppercase; font-family: league gothic,impact,sans-serif; transform: rotate(-7deg); letter-spacing: 0.8px;">Hacked !</div>'); 
  /* fin */
})();