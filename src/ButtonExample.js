const Btnn = ({primary, danger, className, ...props}) =>{
const Tag = props.href ? "a" : "button"

  return <Tag
  type="button"
  className={cn(
    "btn",
    primary && "btn-primary",
    danger && "btn-danger",
     className
   )}
  {...props}
  />
}
const PrimaryBtn = props =>
<Btnn
  primary
  {...props}
  />

  const DangerBtn = props =>
  <Btnn
  danger
    {...props}
    />

    <PrimaryBtn>SOME</PrimaryBtn>
    <DangerBtn>ANOTHER</DangerBtn>

    /*class App extends Component {
      constructor(){
        super()
        this.handleNightMode = this.handleNightMode.bind(this)
        this.state ={
          nightMode: false,
          todos: [
            {id: 1, name: 'Learn sth', isComplete: true},
            {id: 2, name: 'Make money', isComplete: false},
            {id: 3, name: 'Do it', isComplete: false}
          ]
        }
      }

      handleNightMode() {
        this.setState({
          nightMode: !this.state.nightMode
        });
      }

      render() {
        return (
          <div className="App">
          <div className={this.props.nightMode ? 'nightMode' : ''}>
          <button onClick={this.handleNightMode}>Night Mode</button>
          </div>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>React Todos</h2>
            </div>
            <div className="Todo-App">
              <form>
                <input type="text"/>
              </form>
              <div className="Todo-List">
                <ul>
                {this.state.todos.map(todo =>
                    <li key={todo.id}>
                    <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
                    </li>
                )}
                </ul>
              </div>
            </div>
          </div>
        );
      }
    }
    */
