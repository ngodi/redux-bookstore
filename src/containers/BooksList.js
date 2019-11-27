import React from 'react';


const BooksList = () => {
    return (
        <div>
           <table>
               <tr>
                   <td>Book ID</td>
                   <td>Title</td>
                   <td>Category</td>
                   {/*connect to redux store to fetch books from state*/}
               </tr>
           </table>
        </div>
    )
}

export default BooksList;