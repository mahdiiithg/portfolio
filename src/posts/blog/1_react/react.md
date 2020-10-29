---
title: 'The react framewrok'
date: '16/09/2020'
description: 'the great react framework reactnative'
lang: 'en'
---


React (additionally called React.js or ReactJS) is an open-source JavaScript library for constructing person interfaces or UI additives. it's miles maintained by way of Facebook and a network of person builders and businesses. React can be used as a base within the development of unmarried-web page or cell packages. but, React is most effective involved with rendering facts to the DOM, and so growing to React packages usually requires the usage of extra libraries for kingdom control and routing. Redux and React Router are respective examples of such libraries.


![react](./react.png)

<br><br>
digital DOM
any other superb feature is the use of a digital document object version, or digital DOM. React creates an in-reminiscence facts-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.[12]. This procedure is known as reconciliation. This lets in the programmer to write down code as if the entire web page is rendered on every change, at the same time as the React libraries simplest render subcomponents that actually alternate. This selective rendering provides a primary overall performance increase. It saves the effort of recalculating the CSS fashion, layout for the web page and rendering for the entire page.
<br><br>
Lifecycle strategies
Lifecycle strategies use a form of hooking that allows the execution of code at set factors throughout a thing's lifetime.
<br><br>
shouldComponentUpdate permits the developer to prevent pointless re-rendering of a aspect through returning fake if a render is not required.
componentDidMount is called as soon as the element has "established" (the thing has been created inside the consumer interface, often by means of associating it with a DOM node). that is generally used to cause facts loading from a remote supply through an API.
componentWillUnmount is called right now earlier than the element is torn down or "unmounted". this is usually used to clean resource-stressful dependencies to the aspect in order to not in reality be removed with the unmounting of the issue (e.g., removing any setInterval() instances that are associated with the factor, or an "eventListener" set at the "record" because of the presence of the element)
render is the maximum essential lifecycle technique and the simplest required one in any thing. it is usually known as each time the component's kingdom is up to date, which need to be pondered within the person interface.
<br><br>
JSX
JSX, or JavaScript XML, is an extension to the JavaScript language syntax.[13] comparable in appearance to HTML, JSX presents a way to shape issue rendering the use of syntax familiar to many developers. React components are usually written the usage of JSX, although they do not ought to be (additives may also be written in pure JavaScript). JSX is much like every other extension syntax created by using fb for php known as XHP.
