<div align="center">
<h3><b>Zilola - Awesome Books</b></h3>
</div>

<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)


# 📖 "Awesome Books" <a name="about-project"></a>

**"Awesome Books"** project is a single-page app consisting of the following main files:

- HTML files (index.html)
- CSS file (index.css)
- the entry point for the main JavaScript code called index.js;
- a `modules directory` containing .js files (modules) for specific functions.

The repo was documented in a professional way. The Website is simple and dynamic.


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript">JavaScript</a></li>
  </ul>
</details>


### Key Features <a name="key-features"></a>

**Technical features:**
- **no linter errors**
- **dynamically created #book-list section**
- **dynamically created sections (single-page app)**
- **'Add' button that adds a new book to the list**
- **'Remove' button that removes the book from the list**
- **data is preserved in the browser's memory**
- **objects and arrays are created by class constructors**

**Design features:**
- **using medium-fidelity wireframe**
- **responsive layout**

**ES6 features:**
- **functions are refactored to arrow functions**
- **let and const are used for declarations (instead of var)**
- **index.js with type="module" imports modules from ./modules directory**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🚀 Live Demo <a name="live-demo"></a>

- use this link to visit the [Awesome Books app](https://zilola-nazarova.github.io/awesome-books-es6/);

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Setup

Login to your GitHub account. Clone this repository to your desired folder:

> cd my-folder
> git clone git@github.com:Zilola-Nazarova/awesome_books.git

### Prerequisites

In order to run and modify this project you need:

- gitHub account;
- git installed on your OS;
- VSCode (or another code editor);
- modern browser (supporting HTML5 and CSS3) is highly recommended;

### Install

Installations required to run and modify this project. You might want to have linters installed in your local env to successfully run and modify this project:

- Webhint installation. Run the following command:
> npm install --save-dev hint@7.x

- Stylelint installation. Run the following command:
> npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x

- Eslint installation. Run the following command:
> npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x

### Usage

You can use this project to store your own collection of books:

1. Open index.html file in your browser (or open the [Demo](https://zilola-nazarova.github.io/awesome-books-es6/) link).
2. Navigate to the Add-new page in navigation bar. Click the "Add" button to add a new book to the collection. The new book is displayed in the List page. 
3. Navigate to the List page in navigation bar. Click the "Remove" button to removed the book from the collection. The corresponding book dissapears from the List page.
4. Refresh your page. Your data is preserved in the browser's memory.

### Run tests

To run tests on the cloned project, run the following commands:

> npx hint .<br />
> npx stylelint "**/*.{css,scss}" <br />
> npx eslint . <br />
> lighthouse url options

### Deployment

Visit this project's single-page app [here](https://zilola-nazarova.github.io/awesome-books-es6/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👤 Zilola Nazarova

- GitHub: [@Zilola-Nazarova](https://github.com/Zilola-Nazarova)
- Twitter: [@NazarovaZi](https://twitter.com/NazarovaZi)
- LinkedIn: [Zilola Nazarova](https://www.linkedin.com/in/zilola-nazarova-a64858265/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🔭 Future Features <a name="future-features"></a>

Future features may include:
- design improvements;
- additional functionalities.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcomed!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>

If you like this project just star it!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse program for the knowledge and skills we have acquired in Module 1.

I am grateful for all our previous project reviewers for their advice. Thanks to them we could build this app.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ❓ FAQ (OPTIONAL) <a name="faq"></a>

- **Why is import/no-unresolved rule ignored in NavActivate.js?**
  - It seems to be a bug as explained in this [issue](https://github.com/firebase/firebase-admin-node/discussions/1359). There are no Eslint errors when I run `npx eslint .` in my local env.
- **Why the current date is not displayed in the Demo?**
  - It seems we will learn this deployment issue in the [Webpack lesson](https://github.com/microverseinc/curriculum-javascript/blob/main/todo-list/exercises/exercise_to_do_list_secure_deploy.md) as explained in this [issue](https://questions.microverse.org/t/how-to-import-and-use-luxon-without-webpack/2319).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
