// TODO

class GroceryListItem extends React.Component {
    
    constructor(props) {
         // Equivalent to ES5's React.Component.call(this, props)
        super(props);

        // `state` is just an object literal
        this.state = {
            done: false
        };
    }

    // When a list item is clicked, we will toggle the `done`
    // boolean, and our component's `render` method will run again
    onListItemClick() {
        this.setState({
            done: !this.state.done
        });
        if (this.state.done === false) {
            alert('NICE');
        }
    }

    // Every class component must have a `render` method
    // Stateless functional components are pretty much just this method
    render() {
        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none'
        };

    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li style= {style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>,
      (<Fruits />)
    );

  }
}

// a component
var Dairy = () => (
    <ul>
        <li>Eggs</li>
        <li>Almond Milk</li>
    </ul>
    
)

// a component
var Fruits = () => (
    <ul>
        <li>Bananas</li>
        <li>Oranges</li>
    </ul>
)

// a component using the class component GroceryListItem
var GroceryList = (props) => {

    return (
        <ul>
            {props.groceryItems.map(item =>
                <GroceryListItem item={item} />)}
        </ul>
    );
};

var GroceryListApp = () => (

    <ul>
        <Dairy />
        <GroceryList groceryItems={['Cereal', 'Coffee', 'Bread']}/>
    </ul>

)

ReactDOM.render(<GroceryListApp />, document.getElementById("app"));
ReactDOM.render(<Fruits />, document.getElementById("other"));