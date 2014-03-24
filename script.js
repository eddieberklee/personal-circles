$(function() {
  $('.screenshot-blackout').click(function() {
    $(this).hide();
  });

  $('.circle-skill').hover(function() {
    $(this).css('z-index',parseInt($(this).css('z-index'))+1);
  }, function() {
  });

  $('#meet-middle').click(function(e) {
    e.preventDefault();
    // $(this).parents('.portfolio-wrapper').siblings('.screenshot-blackout').eq(0).show();
  });
  $('#info-stocks').click(function(e) {
    e.preventDefault();
    // $(this).parents('.portfolio-wrapper').siblings('.screenshot-blackout').eq(1).show();
  });
  $('#aot-notifier').click(function(e) {
    e.preventDefault();
    // $(this).parents('.portfolio-wrapper').siblings('.screenshot-blackout').eq(2).show();
  });
  $('#prizm-portfo').click(function(e) {
    e.preventDefault();
    // $(this).parents('.portfolio-wrapper').siblings('.screenshot-blackout').eq(3).show();
  });
  $('#wooklee').click(function(e) {
    e.preventDefault();
    // $(this).parents('.portfolio-wrapper').siblings('.screenshot-blackout').eq(4).show();
  });
  $('#byteclothing').click(function(e) {
    e.preventDefault();
    // $(this).parents('.portfolio-wrapper').siblings('.screenshot-blackout').eq(5).show();
  });
  $('#tele-bears').click(function(e) {
    e.preventDefault();
    // $(this).parents('.portfolio-wrapper').siblings('.screenshot-blackout').eq(6).show();
  });
  $('#auto-doorlock').click(function(e) {
    e.preventDefault();
    // $(this).parents('.portfolio-wrapper').siblings('.screenshot-blackout').eq(7).show();
  });
  $('#crawling-dog').click(function(e) {
    e.preventDefault();
    // $(this).parents('.portfolio-wrapper').siblings('.screenshot-blackout').eq(8).show();
  });
  $('#landskape').click(function(e) {
    e.preventDefault();
    // $(this).parents('.portfolio-wrapper').siblings('.screenshot-blackout').eq(9).show();
  });
  $('#10k-to-mastery').click(function(e) {
    e.preventDefault();
    // $(this).parents('.portfolio-wrapper').siblings('.screenshot-blackout').eq(10).show();
  });
  $('#manga-dl').click(function(e) {
    e.preventDefault();
    // $(this).parents('.portfolio-wrapper').siblings('.screenshot-blackout').eq(11).show();
  });
});

animate_duration = 200;

$(".portfolio-wrapper").hover(function() {
  // optimize by $(this) -> $this
  $(this).find(".blackout").css('opacity','1');
  $(this).find("h2").css('opacity','1');


  $base = $(this);
  var circles = [''];  // necessary for indexing to work in the for loop
  var i = 1;
  selected = $base.find('.circle-skill:nth-of-type('+i+')');
  while (selected.length == 1) {
    circles.push(selected);
    i += 1;
    selected = $base.find('.circle-skill:nth-of-type('+i+')');
  }
  for(var i=1; i<=circles.length; i++) {
    var $skill = $(circles[i]);
    var $orig = $base.find('.skills-'+i);
    var $dest = $base.find('.skills-'+i+'-dest');
    var dest_top = $dest.css('top');
    var dest_left = $dest.css('left');
    $skill.stop().animate({
      top: dest_top,
      left: dest_left,
    },animate_duration,function() {$(this).css('z-index','100');});
  }
}, function() {
  $(this).find(".blackout").css('opacity','0');
  $(this).find("h2").css('opacity','0');

  $base = $(this);
  var circles = [''];  // necessary for indexing to work in the for loop
  var i = 1;
  selected = $base.find('.circle-skill:nth-of-type('+i+')');
  while (selected.length == 1) {
    circles.push(selected);
    i += 1;
    selected = $base.find('.circle-skill:nth-of-type('+i+')');
  }
  for(var i=1; i<=circles.length; i++) {
    var $skill = $(circles[i]);
    var $dest = $base.find('.skills-'+i);
    var $orig = $base.find('.skills-'+i+'-dest');
    var dest_top = $dest.css('top');
    var dest_left = $dest.css('left');
    $skill.css('z-index','-1');
    $skill.stop().animate({
      top: dest_top,
      left: dest_left,
      'z-index': '-1',
    },animate_duration);
  }
});

function isOn($selector) {
  if($selector.attr('class').indexOf('on') != '-1') {
    return true;
  } else {
    return false;
  }
}
function showImg($img) {
  $img.css('display','block');
  $img.css('position','absolute');
  $img.css('top','6px');
  $img.css('left','41px');
  $img.css('z-index','2');
}
$('#left-column .circle-skill-row').hover(function() {
  $circle_skill = $(this).children('.circle-skill');
  if (isOn($circle_skill)) {
    // if it's turned on, the option to be to turn it off
    var checkcross = 'cross';
    var i=1;
  } else if (!isOn($circle_skill)) {
    var checkcross = 'checkmark';
    var i=0;
  } else { console.log('yo somethings really effed up'); }

  $img = $circle_skill.find('img')[i];
  $img = $($img);
  showImg($img);
}, function() {
  $circle_skill = $(this).children('.circle-skill');
  $img = $circle_skill.find('img');
  for(var i=0; i<$img.length; i++) {
    $img.css('display','none');
  }
});
var t = 800;
function showPortfolio($p) {
  $p.css('display','block');
  $(this).css('display', 'block');
  $p.animate({
    'z-index': '1',
    'opacity': '1',
  },t,function() {
  });
}
function hidePortfolio($p) {
  // $p.css('z-index','-100');
  // $p.css('display','none');
  // $p.css('opacity','0');
  $p.animate({
    'z-index': '-100',
    'opacity': '0',
  },t,function() {
    $(this).css('display', 'none');
  });
}
function hideAll() {
  skills = ['Ru', 'Py', 'HT', 'CS', 'Ja', 'Ar', 'PH']
  for(var i=0; i<skills.length; i++) {
    hideAllContaining(skills[i]);
  }
}
function showAll() {
  skills = ['Ru', 'Py', 'HT', 'CS', 'Ja', 'Ar', 'PH']
  for(var i=0; i<skills.length; i++) {
    showAllContaining(skills[i]);
  }
}
$('#show-all').click(function() {
  showAll();
  $circles = $('#left-column .circle-skill');
  for(var c=0; c<$circles.length; c++) {
    $($circles[c]).removeClass('off');
    $($circles[c]).addClass('on');
  }
});
$('#hide-all').click(function() {
  hideAll();
  $circles = $('#left-column .circle-skill');
  for(var c=0; c<$circles.length; c++) {
    $($circles[c]).removeClass('on');
    $($circles[c]).addClass('off');
  }
});
function hideAllContaining(skillText) {
  $portfoliowrappers = $('.portfolio-wrapper');
  for(var pw=0; pw<$portfoliowrappers.length; pw++) {
    $p = $($portfoliowrappers[pw]);
    t = $p.text().trim();
    if (t.indexOf(skillText) != -1) {
      hidePortfolio($p);
    }
  }
}
function showAllContaining(skillText) {
  $portfoliowrappers = $('.portfolio-wrapper');
  for(var pw=0; pw<$portfoliowrappers.length; pw++) {
    $p = $($portfoliowrappers[pw]);
    t = $p.text();
    if (t.indexOf(skillText) != -1) {
      showPortfolio($p);
    }
  }
}
$('#left-column .checkmark').click(function() {
  showAllContaining($(this).parent().text().trim());
  $parent = $(this).parent();
  if(isOn($parent)) {
    $parent.removeClass('on');
    $parent.addClass('off');
    var i=0;
  } else if (!isOn($circle_skill)) {
    $parent.removeClass('off');
    $parent.addClass('on');
    var i=1;
  } else { console.log('yo something really really effed up'); }
  $circle_skill = $parent;
  $img = $circle_skill.find('img');
  $img.css('display','none');
  $img = $($img[i]);
  showImg($img);
});
$('#left-column .cross').click(function() {
  hideAllContaining($(this).parent().text().trim());
  $parent = $(this).parent();
  if(isOn($parent)) {
    $parent.removeClass('on');
    $parent.addClass('off');
    var i=0;
  } else if (!isOn($parent)) {
    $parent.removeClass('off');
    $parent.addClass('on');
    var i=1;
  } else { console.log('yo something really really effed up'); }
  $circle_skill = $parent;
  $img = $circle_skill.find('img');
  $img.css('display','none');
  $img = $($img[i]);
  showImg($img);
});

$('.portfolio-wrapper .circle-skill').hover(function() {
  $(this).css('width','140px');
  $(this).text($(this).prev().text());
},function() {
  $(this).css('width','38px');
  $(this).text($(this).prev().prev().text());
});

