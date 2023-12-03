import { Divider, Rate } from "antd";
import { useParams } from "react-router-dom";
import AddToCart from "components/pages/book-detail/components/AddToCart/AddToCart";
import { useGetBookDetail } from "hooks/useGetBookDetail";
import Comments from "components/pages/book-detail/components/Comments/Comments";
import { truncateString } from "utils";
import { round } from "utils";

function BookDetail() {
  const { slug } = useParams();
  const { book } = useGetBookDetail(slug);

  return (
    <div className="book-detail">
      <div className="book-detail-content">
        <div className="book-cover">
          <img src={`http://localhost:8080/api/image/${slug}`} alt="" />
        </div>
        <div className="book-detail-information">
          <h1 className="title">{book.title}</h1>
          <div className="after-title">
            <p className="author">
              <span style={{ color: "#999999" }}>Author:</span> {book.author}
            </p>
            <Divider type="vertical" />
            <div className="d-flex align-items-center">
              <Rate
                value={book.stars}
                allowHalf
                disabled
                style={{ fontSize: 12 }}
              />
              <span className="ant-rate-text" style={{ fontSize: 12 }}>
                {book.stars}
              </span>
            </div>
          </div>
          <h2 className="price">$ {round(book.price, 2)}</h2>
          <p className="description" style={{ fontStyle: "italic" }}>
            {truncateString(book.description, 150)}
          </p>
          <p className="category">
            <span style={{ color: "#999999" }}>Category:</span> {book.category}
          </p>
          <p className="category">
            <span style={{ color: "#999999" }}>Pages number:</span> {book.pages}
          </p>
          <p className="category">
            <span style={{ color: "#999999" }}>Release:</span> {book.release}
          </p>
          <div className="quantity">
            <p>Quantity</p>
            <AddToCart item={book} />
          </div>
          <div className="description-container">
            <h1>Description</h1>
            <p>{book.description}</p>
          </div>
        </div>
      </div>
      <Comments bookid={book.id} />
    </div>
  );
}

export default BookDetail;
