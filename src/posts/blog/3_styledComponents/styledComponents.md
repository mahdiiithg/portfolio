---
title: 'The Styled-Components'
date: '11/09/2020'
description: 'Styled-Components'
---

<h3>1:  What is styled-components?</h3>
styled-components is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users.

Apart from the improved experience for developers, styled-components provides:

Automatic critical CSS: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.
No class name bugs: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.

![styledComponents](./styledComponents.png)

Easier deletion of CSS: it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.
Simple dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.
Painless maintenance: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.
Automatic vendor prefixing: write your CSS to the current standard and let styled-components handle the rest.
You get all of these benefits while still writing the CSS you know and love, just bound to individual components.

<hr>
<b>Installation</b> <br>
Installing styled-components only takes a single command and you're ready to roll:

npm install --save styled-components
npm install --save styled-components
If you use a package manager like yarn that supports the "resolutions" package.json field, we also highly recommend you add an entry to it as well corresponding to the major version range. This helps avoid an entire class of problems that arise from multiple versions of styled-components being installed in your project.

In package.json:
<br>
{<br>
  "resolutions": {<br>
    "styled-components": "^5"
  <br>}<br>
}<br>
<br>
{<br>
  "resolutions": {<br>
    "styled-components": "^5"
  <br>}<br>
}<br>
NOTE
It's highly recommended (but not required) to also use the Babel plugin. It offers many benefits like more legible class names, server-side rendering compatibility, smaller bundles, and more.