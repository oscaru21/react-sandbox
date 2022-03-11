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
## Props.

To make our Components more dynamic and reusable we use something called props, these are parameters passed throught the component tag that we can use in our component constructor with the name props like this:
```javascript
function Component(props){
    return <> <h1>{props.parameter}</h1>
}
```

We can also use destructure notation in order to get the parameters directly:
```javascript
function Component({parameter}){
    return <> <h1>{parameter}</h1>
}
```

Finally we can define default props values in case we don't receive an input using the defaultProps attribute:
```javascript
Component.defaultProps = {
    parameter: 'default parameter value'
}
}
```
# State
## Component State.

State is very similar to props, but it is private and fully controlled by the component. The main difference is that props are passed into the component and they should not change, on the other side the state can change and affects the rendering of the component. Calls to setState are asynchronous.

In order to use state in a functional component we need to use the useState Hook. (Hooks always start with 'use'):
```javascript
const [stateName, setStateName] = useState(defaultValue);
```

## Global State.

We can pass the state from a parent component to the children as props.

### Prop Drilling.

Imagine that you have define a global state that needs to be updated with an event that is triggered in one of the childrens, for example an element of a list needs to be deleted but the list lives in the parent Component, in order to do this we need to transfer the delete function from the parent to the children as a prop in order to use it with the event.

```javascript
const deleteElement = () => setState();
return (
    <Parent>
        <Children handleDelete={deleteElement}></Children>
    </Parent>

```
