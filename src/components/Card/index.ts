import CardComponent from "./Card";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Card = Object.assign(CardComponent, {
  Body,
  Footer,
  Header
});

export default Card;
