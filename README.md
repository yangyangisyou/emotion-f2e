# Emotion website - F2E
Emotion is a creative and sharing platform that you can share some idea and put an image you like on the website.
You can also browse many kinds of idea, just choose what kinds category you like.

## Demo
Version 1.0: 
- F2E Avalible in [Emotion platform](http://emotion-app.yyisyou.tw/)

## Tech stack - F2E 
<p float="left" margin="10px">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" height="100px"> 
  <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="100px">
  <img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" height="100px">  
  <img src="https://avatars.githubusercontent.com/u/10717820?s=400&v=4" height="100px">
  <img src="https://magiclen.org/wp-content/uploads/2019/06/webpack.png" height="100px">
  <img src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png" height="100px">
</p>

## Tech stack - Backend 
[More about emotion-api](https://github.com/yangyangisyou/emotion-api)
<p float="left" margin="10px">
  <img src="https://miro.medium.com/max/568/1*NVCQ4tTrPoAYDAkXCTFe8A.png" height="100px"> 
  <img src="https://miro.medium.com/max/640/0*6qOgnDDBnPDiANOY.png" height="100px">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"height="100px">  
  <img src="https://expressjs.com/images/express-facebook-share.png" height="100px">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pixabay-logo-new.svg/1200px-Pixabay-logo-new.svg.png" height="100px">
  <img src="https://thepracticaldev.s3.amazonaws.com/i/c29t9uc8roz8g9rddbqs.png" height="100px">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png"height="100px">
</p>

### F2E
* React.js 17.0.1  
* Redux 4.0.1

### CSS
* styled-components 5.2.1  
* Sass

### Data flow
* redux-api-middleware 3.2.1

### Canvas
* React-konva 17.0.1

### Form and validate
* Formik 2.2.6
* yup 0.36.8

### Security/SEO
* react-helmet 6.0.1

### Features
* [Airbnb Lint](https://github.com/airbnb/javascript)  
<img src="https://i.imgur.com/A2XaNqc.png"> 

### Design principles
1. Pure function
    - To prevent **unexpected side effect**, pure function could helps developer trace and debug the code more easily. 
2. OOCSS
    - Root class selector is used to skeleton and its spread class selector is used to dressing.
    - e.g. card-title and card-title-loading
3. Stateless component always focused on design
    - To design component more easily, only dress CSS in the specific component. 
4. Top-level / paged-based component always focused on data flow
    - Most of state managed by page-based container, because data flow always connects with container.

### Version 2.0 in the future
To build a SEO friendly platform, I'm going to use webpack to build a server-side bundle for SSR.
 
## How to run on local
1. install related dev tools
```
npm install
```

2. start web application  
```
npm run start
```
3. Go to http://localhost:3000

## How to build server-side prerender application
1. build web bundle using webpack
```
npm run build:server
```

2. run the application within SSR
```
npm run start:server
```
3. Go to http://localhost:3000



