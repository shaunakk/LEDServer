const express = require('express');
const router = express.Router();
const colors = {
  'aliceblue': 'F0F8FF',
  'antiquewhite': 'FAEBD7',
  'aqua': '00FFFF',
  'aquamarine': '7FFFD4',
  'azure': 'F0FFFF',
  'beige': 'F5F5DC',
  'bisque': 'FFE4C4',
  'black': '000000',
  'blanchedalmond': 'FFEBCD',
  'blue': '0000FF',
  'blueviolet': '8A2BE2',
  'brown': 'A52A2A',
  'burlywood': 'DEB887',
  'cadetblue': '5F9EA0',
  'chartreuse': '7FFF00',
  'chocolate': 'D2691E',
  'coral': 'FF7F50',
  'cornflowerblue': '6495ED',
  'cornsilk': 'FFF8DC',
  'crimson': 'DC143C',
  'cyan': '00FFFF',
  'darkblue': '00008B',
  'darkcyan': '008B8B',
  'darkgoldenrod': 'B8860B',
  'darkgray': 'A9A9A9',
  'darkgreen': '006400',
  'darkgrey': 'A9A9A9',
  'darkkhaki': 'BDB76B',
  'darkmagenta': '8B008B',
  'darkolivegreen': '556B2F',
  'darkorange': 'FF8C00',
  'darkorchid': '9932CC',
  'darkred': '8B0000',
  'darksalmon': 'E9967A',
  'darkseagreen': '8FBC8F',
  'darkslateblue': '483D8B',
  'darkslategray': '2F4F4F',
  'darkslategrey': '2F4F4F',
  'darkturquoise': '00CED1',
  'darkviolet': '9400D3',
  'deeppink': 'FF1493',
  'deepskyblue': '00BFFF',
  'dimgray': '696969',
  'dimgrey': '696969',
  'dodgerblue': '1E90FF',
  'firebrick': 'B22222',
  'floralwhite': 'FFFAF0',
  'forestgreen': '228B22',
  'fuchsia': 'FF00FF',
  'gainsboro': 'DCDCDC',
  'ghostwhite': 'F8F8FF',
  'gold': 'FFD700',
  'goldenrod': 'DAA520',
  'gray': '808080',
  'green': '008000',
  'greenyellow': 'ADFF2F',
  'grey': '808080',
  'honeydew': 'F0FFF0',
  'hotpink': 'FF69B4',
  'indianred': 'CD5C5C',
  'indigo': '4B0082',
  'ivory': 'FFFFF0',
  'khaki': 'F0E68C',
  'lavender': 'E6E6FA',
  'lavenderblush': 'FFF0F5',
  'lawngreen': '7CFC00',
  'lemonchiffon': 'FFFACD',
  'lightblue': 'ADD8E6',
  'lightcoral': 'F08080',
  'lightcyan': 'E0FFFF',
  'lightgoldenrodyellow': 'FAFAD2',
  'lightgray': 'D3D3D3',
  'lightgreen': '90EE90',
  'lightgrey': 'D3D3D3',
  'lightpink': 'FFB6C1',
  'lightsalmon': 'FFA07A',
  'lightseagreen': '20B2AA',
  'lightskyblue': '87CEFA',
  'lightslategray': '778899',
  'lightslategrey': '778899',
  'lightsteelblue': 'B0C4DE',
  'lightyellow': 'FFFFE0',
  'lime': '00FF00',
  'limegreen': '32CD32',
  'linen': 'FAF0E6',
  'magenta': 'FF00FF',
  'maroon': '800000',
  'mediumaquamarine': '66CDAA',
  'mediumblue': '0000CD',
  'mediumorchid': 'BA55D3',
  'mediumpurple': '9370DB',
  'mediumseagreen': '3CB371',
  'mediumslateblue': '7B68EE',
  'mediumspringgreen': '00FA9A',
  'mediumturquoise': '48D1CC',
  'mediumvioletred': 'C71585',
  'midnightblue': '191970',
  'mintcream': 'F5FFFA',
  'mistyrose': 'FFE4E1',
  'moccasin': 'FFE4B5',
  'navajowhite': 'FFDEAD',
  'navy': '000080',
  'oldlace': 'FDF5E6',
  'olive': '808000',
  'olivedrab': '6B8E23',
  'orange': 'FFA500',
  'orangered': 'FF4500',
  'orchid': 'DA70D6',
  'palegoldenrod': 'EEE8AA',
  'palegreen': '98FB98',
  'paleturquoise': 'AFEEEE',
  'palevioletred': 'DB7093',
  'papayawhip': 'FFEFD5',
  'peachpuff': 'FFDAB9',
  'peru': 'CD853F',
  'pink': 'FFC0CB',
  'plum': 'DDA0DD',
  'powderblue': 'B0E0E6',
  'purple': '800080',
  'rebeccapurple': '663399',
  'red': 'FF0000',
  'rosybrown': 'BC8F8F',
  'royalblue': '4169E1',
  'saddlebrown': '8B4513',
  'salmon': 'FA8072',
  'sandybrown': 'F4A460',
  'seagreen': '2E8B57',
  'seashell': 'FFF5EE',
  'sienna': 'A0522D',
  'silver': 'C0C0C0',
  'skyblue': '87CEEB',
  'slateblue': '6A5ACD',
  'slategray': '708090',
  'slategrey': '708090',
  'snow': 'FFFAFA',
  'springgreen': '00FF7F',
  'steelblue': '4682B4',
  'tan': 'D2B48C',
  'teal': '008080',
  'thistle': 'D8BFD8',
  'tomato': 'FF6347',
  'turquoise': '40E0D0',
  'violet': 'EE82EE',
  'wheat': 'F5DEB3',
  'white': 'FFFFFF',
  'whitesmoke': 'F5F5F5',
  'yellow': 'FFFF00',
  'yellowgreen': '9ACD32',
  'off': '000000',
  'on': 'ffffff'

};
let d = new Date();
let m = d.getMilliseconds()
glow = false
const colorsRGB = {}
for (let key in colors) {
  if (colors.hasOwnProperty(key)) {
    colorsRGB[key] = hexToRGB(colors[key]);
  }
}

function hexToRGB(hex) {
  if (hex.charAt(0) === '#') {
    hex = hex.substr(1);
  }
  if ((hex.length < 2) || (hex.length > 6)) {
    return false;
  }
  var values = hex.split(''),
    r,
    g,
    b;

  if (hex.length === 2) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = r;
    b = r;
  } else if (hex.length === 3) {
    r = parseInt(values[0].toString() + values[0].toString(), 16);
    g = parseInt(values[1].toString() + values[1].toString(), 16);
    b = parseInt(values[2].toString() + values[2].toString(), 16);
  } else if (hex.length === 6) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = parseInt(values[2].toString() + values[3].toString(), 16);
    b = parseInt(values[4].toString() + values[5].toString(), 16);
  } else {
    return false;
  }

  return {
    r: Math.floor(r / 255 * 1023),
    g: Math.floor(g / 255 * 1023),
    b: Math.floor(b / 255 * 1023)
  };
}
let data = {
  r: 1023,
  g: 1023,
  b: 1023
};

/* GET users listing. */
router.get('/data', function (req, res, next) {
  glow = false;
  let query = req.query;
  if (req.query.color) {
    if (colorsRGB[query.color.toLowerCase().replace(' ', '')] != undefined) {
      data = colorsRGB[query.color.toLowerCase().replace(' ', '')]
      console.log(data)

      res.header("Access-Control-Allow-Origin", "*");
      res.header("Vary", "Origin");
      res.json(data);
    } else res.end("Couldn't find color")
  } else res.end("Please set color query string parameter")
});

router.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Vary", "Origin");
  res.json(data);
});

router.get('/rgb', function (req, res, next) {
  glow = false;
  try {
    if (req.query.r && req.query.g && req.query.b) {
      data = {
        r: parseInt(req.query.r),
        g: parseInt(req.query.g),
        b: parseInt(req.query.b),
      }
      res.end("Success")

    } else res.end("Please set red, green, blue query string parameter")

  } catch (e) {
    res.end(e)
  }
});
router.get('/glow', function (req, res, next) {
  glow = true;
  m = d.getMilliseconds()
  try {
    if (req.query.r && req.query.g && req.query.b) {
      data = {
        r: parseInt(req.query.r),
        g: parseInt(req.query.g),
        b: parseInt(req.query.b),
      }
      res.end("Success")

    } else res.end("Please set red, green, blue query string parameter")

  } catch (e) {
    res.end(e)
  }
});
var r = 1000,
  g = 0,
  b = 0;

setInterval(function () {
  if (r > 0 && b == 0) {
    r--;
    g++;
  }
  if (g > 0 && r == 0) {
    g--;
    b++;
  }
  if (b > 0 && g == 0) {
    r++;
    b--;
  }
  if (glow) data = {
    r: r,
    g: g,
    b: b
  }
}, 10);
module.exports = router;