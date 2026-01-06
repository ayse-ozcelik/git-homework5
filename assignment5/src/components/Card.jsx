function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px 0",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
