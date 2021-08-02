// == Import : npm
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// == Import : local
// Composants
import App from 'src/components/App';

// == Render
// 1. Element Reatc racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = <App />

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
ReactDOM.render(rootReactElement, target);
