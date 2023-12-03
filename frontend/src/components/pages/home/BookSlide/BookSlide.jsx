import React from "react";
import BookItem from "components/BookItem/BookItem";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Slide } from "react-slideshow-image";
import { books } from "constant/fakeData";

function BookSlide({ books = [] }) {
  const properties = {
    nextArrow: <IoChevronForward className="slide-button" />,
    prevArrow: <IoChevronBack className="slide-button" />,
  };
  return (
    <div className="book-slide">
      <h1 className="book-slide-title">New Books</h1>
      {books.length > 0 && (
        <Slide
          slidesToScroll={2}
          slidesToShow={5}
          indicators={true}
          {...properties}
        >
          {books.map((item, id) => {
            return (
              <div className="book-slide-item" key={id}>
                <BookItem noFlex item={item} />
              </div>
            );
          })}
        </Slide>
      )}
    </div>
  );
}

export default BookSlide;
