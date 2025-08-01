import {Component} from 'react'
import Header from '../Header'
class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <h1>Book Store</h1>
                <p>Description</p>
                <button>Explore Books</button>
            </div>
        )
    }
}

export default Home