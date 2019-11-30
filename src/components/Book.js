import React from 'react';

const Book = ({ ID, title, category}) => {

     return(
         <tr>
             <td>{ID}</td>
             <td>{title}</td>
             <td>{category}</td>
         </tr>
     )
 }


export default Book;