import { Divider } from "antd";
import BookList from "components/BookList/BookList";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";

function BestSellers() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/books/best-seller").then((res) => {
      setBooks(res.data);
    });
  }, []);
  return (
    <div className="best-sellers">
      <div className="title">
        <Divider
          orientation="left"
          orientationMargin={0}
          style={{ borderBlockStartColor: "#E6E6E6" }}
        >
          <h1>Best Sellers</h1>
        </Divider>
        <Link to="/shop" className="app-button banner-button">
          <span>View All</span>
          <IoChevronForward stroke="#fff" />
        </Link>
      </div>
      <div className="best-sellers_list">
        <BookList col={2} bookList={books} />
      </div>
    </div>
  );
}

export default BestSellers;
