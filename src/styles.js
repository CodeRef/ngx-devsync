import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'background': '#222',
    'fontFamily': '"Open Sans", Verdana, Geneva, Tahoma, sans-serif',
    'color': '#fff'
  },
  'body *': {
    'transition': 'all 0.400s ease-in-out'
  },
  'h1': {
    'fontFamily': 'Merriweather, Verdana, Geneva, Tahoma, sans-serif'
  },
  'h2': {
    'fontFamily': 'Merriweather, Verdana, Geneva, Tahoma, sans-serif'
  },
  'h3': {
    'fontFamily': 'Merriweather, Verdana, Geneva, Tahoma, sans-serif'
  },
  'h4': {
    'fontFamily': 'Merriweather, Verdana, Geneva, Tahoma, sans-serif'
  },
  'container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': 'px', 'value': 1500 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'WebkitBoxShadow': '0px 10px 18px -7px rgba(0,0,0,0.75)',
    'MozBoxShadow': '0px 10px 18px -7px rgba(0,0,0,0.75)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': -7 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.75)' }],
    'background': '#fff',
    'color': '#111'
  },
  'nav': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 4fr 1fr',
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': 'px', 'value': 1500 }],
    'zIndex': '99',
    'alignItems': 'center',
    '<w1300&&>w1000': {
      'gridTemplateColumns': '1fr 2fr 1fr'
    },
    '<w999&&>w750': {
      'gridTemplateColumns': '1fr 1fr',
      'width': [{ 'unit': '%H', 'value': 1 }]
    },
    '<w749&&>w600': {
      'gridTemplateColumns': '1fr 1fr',
      'width': [{ 'unit': '%H', 'value': 1 }]
    },
    '<w599&&>w320': {
      'gridTemplateColumns': '1fr 1fr',
      'width': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'nav ul:first-of-type': {
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'nav ul:first-of-type li:first-of-type a': {
    'color': '#eee',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'rem', 'value': 1.4 }]
  },
  'nav ul:last-of-type': {
    'textAlign': 'right',
    'paddingRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'medium-nav': {
    'textAlign': 'right'
  },
  'nav ul li': {
    'listStyleType': 'none',
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'nav ul li a': {
    'color': '#fff',
    'textDecoration': 'none',
    'display': 'block'
  },
  'nav ul:last-of-type li:last-of-type a': {
    'background': 'deeppink',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'color': '#fff',
    'borderRadius': '5px',
    'fontWeight': 'bold'
  },
  'header': {
    'background': 'url("../src/assets/anete-lusina-609864-unsplash.jpg")',
    'backgroundPosition': 'bottom',
    'backgroundSize': '100%',
    'height': [{ 'unit': 'px', 'value': 800 }],
    'position': 'relative',
    'color': '#fff'
  },
  'header tagline': {
    'paddingTop': [{ 'unit': 'px', 'value': 120 }],
    'position': 'relative',
    'zIndex': '2',
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'header tagline h1': {
    'fontSize': [{ 'unit': 'rem', 'value': 4 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 4 }]
  },
  'header tagline p': {
    'width': [{ 'unit': '%H', 'value': 0.4 }]
  },
  'header tagline a': {
    'fontWeight': 'bold'
  },
  'contact': {
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'borderRadius': '2px',
    'textAlign': 'center',
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'rem', 'value': 1.1 }],
    'width': [{ 'unit': 'px', 'value': 100 }]
  },
  'learn-more': {
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'borderRadius': '2px',
    'textAlign': 'center',
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'rem', 'value': 1.1 }],
    'width': [{ 'unit': 'px', 'value': 100 }]
  },
  'contact': {
    'background': 'deeppink',
    'textDecoration': 'none',
    'color': '#eee'
  },
  'learn-more': {
    'color': '#fff'
  },
  'header img': {
    'top': [{ 'unit': 'px', 'value': 600 }],
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 740 }],
    'right': [{ 'unit': '%H', 'value': 0.1 }],
    'display': 'block',
    'zIndex': '9'
  },
  'overlay': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 800 }],
    'background': '#222',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '0.4',
    'zIndex': '1'
  },
  'main': {
    'marginTop': [{ 'unit': 'px', 'value': 300 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'main div h3': {
    'fontSize': [{ 'unit': 'rem', 'value': 2 }]
  },
  'main div div h3': {
    'fontSize': [{ 'unit': 'rem', 'value': 2 }]
  },
  'main divintro': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }]
  },
  'main divmulti-section': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }]
  },
  'main divmulti-section-two': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }]
  },
  'main divintro': {
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'textAlign': 'center'
  },
  'divmulti-section': {
    'display': 'grid',
    'gridTemplateColumns': 'repeat(2, 1fr)',
    'gridGap': '10px',
    'background': '#eee'
  },
  'divmulti-section-two': {
    'display': 'grid',
    'gridTemplateColumns': 'repeat(2, 1fr)',
    'gridGap': '10px',
    'background': '#eee'
  },
  'divmulti-section img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'divmulti-section-two img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'a': {
    'gridArea': 'a'
  },
  'b': {
    'gridArea': 'b'
  },
  'divmulti-section-two': {
    'gridTemplateAreas': '"b a"'
  },
  'main div:last-of-type': {
    'textAlign': 'center'
  },
  'footer': {
    'background': '#eee',
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr 1fr 1fr',
    'justifyItems': 'center',
    'alignItems': 'top',
    'marginTop': [{ 'unit': 'px', 'value': 40 }]
  },
  'footer ul': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'listStyleType': 'none'
  },
  'footer ul li': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'footer ul li a': {
    'color': '#111',
    'textDecoration': 'none'
  },
  'footer ul li:first-of-type': {
    'fontWeight': 'bold',
    'color': '#ddd'
  },
  // ------------------------- MEDIA QUERIES ---------------------------
});
