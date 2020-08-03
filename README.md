# gravityMenu.js
GravityMenu.js is a Javascript library.<br/>
Added gravity menu icon to web pages.<br/><br/>
Simple and Easy to use.<br/>
Pure JavaScript Library.<br/><br/>
Using Matter.js. https://github.com/liabru/matter-js<br/>


# License
The source code is licensed MIT.
# Demo
https://labs.manohara.info/gravitymenu/
# Usage
https://labs.manohara.info/gravitymenu/
## Basic Usage
```
<body>
  <canvas></canvas>
</body>
<script defer src='https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.14.2/matter.min.js'></script>
<script defer src='gravitymenu_min.js'></script>
<script>
window.addEventListener('DOMContentLoaded', function() {
  garavityMenu({
    menu_list:[ // label,link,image
      ['top','#top','image.jpg'],
      ['contact','#contact','image.jpg'],
    ],
  });
});
</script>
```

## Options - Sample
```
<script>
window.addEventListener('DOMContentLoaded', function() {
  garavityMenu({
    canvas:'canvas', // canvas element default:'canvas', ex.'#canvas'
    size:50, // menu-circle diameter size(px) default:50
    gap:5, // circle gap size(px) default:0
    menu_list:[ // label,link,image
      ['top','#top','image.jpg'],
      ['contact','#contact','image.jpg'],
      ['social','','image.jpg'], // cond. label=='social' and social=='true'
    ],
    menu_imageSize:500, // menu-square-image original width(px) default:500
    social:true, // true or false default:false
    social_size:40, // social-icon diameter size(px) default:40
    social_list:[ // label,share-link,image 
      ['facebook','https://www.facebook.com/sharer.php?u=[page-url]','image.jpg'],
      ['twitter','https://twitter.com/share?url=[page-url]','image.jpg'],
    ],
    social_imageSize:500, // social-square-image original width(px) default:500
  });
});
</script>
```

## Parameters
```
data-color: Icon color,String (default: grey)
data-border: Icon border color,String (default: white)
data-bordersize: Icon border width,Numeric (default(px): 1)
data-size: Icon size,Numeric (default(px): 35)
```

