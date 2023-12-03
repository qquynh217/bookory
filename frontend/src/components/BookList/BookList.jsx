import { Col, Row } from "antd";
import BookItem from "../BookItem/BookItem";

function BookList({ col = 2, bookList = [0, 1, 2, 3], noFlex = false }) {
  const padding = col == 1 ? "0" : "";
  const lastRow = (bookList.length / col - 1) * col;
  return (
    <Row className="book-list">
      {bookList.map((item, id) => (
        <Col
          span={24 / col}
          className={`book-list_item ${
            (id + 1) % col === 0 ? "border-none" : ""
          } ${id >= lastRow ? "before-none" : ""}`}
          style={{ padding: padding }}
          key={id}
        >
          <BookItem noFlex={noFlex} item={item} />
        </Col>
      ))}
    </Row>
  );
}

export default BookList;
