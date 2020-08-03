# GravityMenu.js
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
canvas: canvas element, String (default: 'canvas')
size:  menu-circle diameter size, Numeric (default(px): 50)
gap: circle gap size, Numeric (default(px): 0)
menu_list: menu-circle's label,link,image-path, Array
menu_imageSize: menu-square-image original width(and height), Numeric (default(px): 500)

social: Social active flag, Boolean (default: false)
social_size: social-icon diameter size, Numeric (default(px): 40)
social_list: social-circle's label,link,image-path, Array
social_imageSize: social-square-image original width(and height), Numeric (default(px): 500)
```

