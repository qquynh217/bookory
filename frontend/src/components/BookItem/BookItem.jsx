import { Rate } from "antd";
import { useNavigate } from "react-router-dom";
import { round } from "utils";

function BookItem({ className = "", noFlex = false, item }) {
  const navigate = useNavigate();
  const goToBookDetail = () => {
    navigate(`/book/${item.slug}`);
  };
  return (
    <div
      className={`book-item ${className} ${noFlex ? "no-flex" : ""}`}
      onClick={goToBookDetail}
    >
      <img
        src={`http://localhost:8080/api/image/${item?.slug}`}
        alt=""
        className="thumb"
      />
      <div className="book-item_info">
        <p className="title">{item?.title}</p>
        <div>
          <Rate
            allowHalf
            defaultValue={item?.stars}
            disabled
            style={{ fontSize: 12 }}
          />
          <span className="ant-rate-text" style={{ fontSize: 12 }}>
            {item?.stars}
          </span>
        </div>
        <p className="author">{item?.author}</p>
        <p className="price">{round(item?.price, 2)} $</p>
      </div>
    </div>
  );
}

export default BookItem;
