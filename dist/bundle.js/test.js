export default function DiceRoll() {
  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6);
  };
  const [num, setNum] = useState(getRandomNumber());
  const handleClick = () => {
    const newNum = getRandomNumber();
    setNum(newNum);
  };
  return /*#__PURE__*/React.createElement("div", null, "Your dice roll: ", num, ".", /*#__PURE__*/React.createElement("button", {
    onClick: handleClick
  }, "Click to get a new number"));
}