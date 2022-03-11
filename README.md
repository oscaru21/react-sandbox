# Things to know before learning React.
React is a very user friendly framework that allows us to organize our components and make them reusable, it's very popular and performs really well.
React is also very declarative, so we can picture the final result just by reading at the code, it consist of:
- Components.
- Props.
- State.
- Events.
## JavaScript:
- The DOM.
- High order array methods.
- Arrow functions.
- Async & fetch API.

## How to create a React app.

```
yarn create react-app <your-app-name>
cd your-app-name
yarn start
```

## React components.

React components can be classes or functions, the more modern react uses functional components using something called Hooks. Every component in this project will be a function using JSX that will allows us to put HTML directly to JS code.

```javascript
function App(){
    return <h1>Hello from the app component</h1>
}
export default App
```

## JSX

JSX always needs to be wrapped in a parent element, that means that a component can't return multiple lines of HTML, for this reason all of all JSX should be wrapped in a <div> element or a fragment <>. Another important thing to keep in mind is that JSX can't use reserved keywords of HTML like class, type, name, etc.

JSX allows us to inject JS code directly to html using curly braces {}, this will allow for dynamic content in our components.

```javascript
return (
    <div className="container">
        <h1>{title}</h1>
        <p>{body}</p>    
    </div>
    )
```
