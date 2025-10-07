import React from 'react'

export default function CardBook() {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 card_book  '>
      <div className='card-img'>
        <img  src="https://funimecity.com/cdn/shop/files/wait-for-me-after-school-vol2novel-bo-ku-funimecity-186820.jpg?v=1733462288" alt="" />
      </div>
      <div className='book_info'>
        <p>Wait for me after school</p>
        <p>Author</p>
        <p>calificacion</p>

        <button className='btn'>Ver Info</button>
      </div>
    </div>
  )
}
