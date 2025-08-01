import {Component} from 'react'
import BookItem from '../BookItem'
const sampledata = {
    "total": "20",
    "books": [
        {
            "title": "Designing Across Senses",
            "subtitle": "A Multimodal Approach to Product Design",
            "isbn13": "9781491954249",
            "price": "$27.59",
            "image": "https://itbook.store/img/books/9781491954249.png",
            "url": "https://itbook.store/books/9781491954249"
        },
        
        {
            "title": "Programming iOS 11",
            "subtitle": "Dive Deep into Views, View Controllers, and Frameworks",
            "isbn13": "9781491999226",
            "price": "$59.17",
            "image": "https://itbook.store/img/books/9781491999226.png",
            "url": "https://itbook.store/books/9781491999226"
        }
        
    ]
}

class BooksList extends Component{
    render(){
        return(
            <div>
                <h1>BooksList Component</h1>
                <div> 
                  {sampledata.books.map((eachBook) => (
                    <BookItem  />
                  ))}
                </div>
            </div>
        )
    }
}

export default BooksList