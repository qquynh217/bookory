import BookList from "components/BookList/BookList";
import Banner from "components/pages/home/Banner/Banner";
import BestSellers from "components/pages/home/BestSellers/BestSellers";
import BookSlide from "components/pages/home/BookSlide/BookSlide";
import { IoChevronForward } from "react-icons/io5";
import image from "resources/images/joinCommunity.png";
import axios from "axios";
import { useState, useEffect } from "react";

export const getBook = async () => {
  const res = await axios.get("http://localhost:8080/api/books");
  return res.data;
};
function HomePage() {
  const [books, setBooks] = useState([]);
  const [mostView, setMostView] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBook();
      setBooks(data);
      const res = await axios.get(
        "http://localhost:8080/api/books/most-viewed"
      );
      setMostView(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="home-page">
      <Banner />
      <div className="home-page_inner">
        <BestSellers />
        <div className="most-viewed">
          <h1>Most Viewed</h1>
          <div className="most-viewed_container">
            <BookList col={1} bookList={books.slice(0, 4)} />
          </div>
        </div>
      </div>
      <div className="new-books">
        <BookSlide books={mostView} />
      </div>
      <div className="join-community">
        <div className="join-community-input">
          <h1 className="title">Join the community</h1>
          <p className="desc">
            Enter your email address to receive regular updates, as well as news
            on upcoming events and specific offers.
          </p>
          <div className="input">
            <input
              className="input-item"
              type="text"
              placeholder="Your email address"
            />
            <button className="app-button">
              <span>Subcribe</span>
              <IoChevronForward />
            </button>
          </div>
        </div>
        <div className="join-community-thumb">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
