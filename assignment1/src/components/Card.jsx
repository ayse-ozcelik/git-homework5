const Card = ({ children }) => {
  const cardStyle = {
    border: '2px solid #4A90E2',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    width: '250px'
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;