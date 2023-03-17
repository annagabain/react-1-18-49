import React from 'react'
import Book from "./Book"

    function RenderingLists() {

        const booklist = [
            'to kill a mockingbird',
            'the great gatsby',
            'the catcher in the rye'
        ]

        const books = [
            {
                title: 'to kill a mockingbird',
                author: 'harper lee',
                pages: 281
            },
            {
                title: 'the great gatsby',
                author: 'f. scott  fitzgerald',
                pages: 218
            },
            {
                title: 'the catcher in the rye',
                author: 'j. d. salinger',
                pages: 234
            }
        ]

        return (
            <div>
                {booklist.map(book => {
                    return <h1>{book}</h1>
                })}

                <hr />
                {
                    books.map(book => {
                        return <Book book={book} />
                    })
                }

                

            </div>
        )
    }

export default RenderingLists