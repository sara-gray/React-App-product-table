# ProductList

## Author: Sara Gray

---

I wanted to take the example given on the [Thinking in React](#https://reactjs.org/docs/thinking-in-react.html) page and build it by myself using the model outlined

    [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];

(#thinking-in-react-components.png)

We have five components in our app. We’ve italicized the data each component represents.

- FilterableProductTable (orange): contains the entirety of the example
- SearchBar (blue): receives all user input
- ProductTable (green): displays and filters the data collection based on user input
- ProductCategoryRow (turquoise): displays a heading for each category
- ProductRow (red): displays a row for each product

Components that appear within another component in the mock should appear as a child in the hierarchy:

- FilterableProductTable

  - SearchBar
  - ProductTable

    - ProductCategoryRow
    - ProductRow

# Build A Static Version in React

The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. It’s best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing. We’ll see why.

Build a static version of your app that renders your data model and pass data using props. Don’t use state at all to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.

You can build top-down or bottom-up.

In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up and write tests as you build.

The components will only have render() methods since this is a static version of your app. The component at the top of the hierarchy (FilterableProductTable) will take your data model as a prop. If you make a change to your underlying data model and call ReactDOM.render() again, the UI will be updated. You can see how your UI is updated and where to make changes. React’s one-way data flow (also called one-way binding) keeps everything modular and fast.
