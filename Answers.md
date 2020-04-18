# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a js library that has the functionality of a framework. Specifically solves the problem of efficient data rendering of components instead of refreshing the entire page due to a change in data. The FB example of updating the feed by rendering a post component w/o rerendering the entire page.

1. Describe component state.

State is an object that causes how a component renders to the DOM.

1. Describe props.

Props are properties of data being passed through different components of a page. props determine what data is accessible to components lower in the tree like DOM structure.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are just that, unintended actions caused from the rendering of the component to the DOM. We use a useEffect() hook to tell the component to rerender when there is a change in state or specific props.
