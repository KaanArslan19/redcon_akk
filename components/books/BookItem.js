import classes from "./BookItem.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Card from "../ui/Card";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const BookItem = (props) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <Link href={`/books/bookdetails/${props.id}`}>
      <li className={isMobile ? classes.containerMobile : classes.container}>
        <Card>
          <div className={props.bg ? classes.differentBg : classes.imgBox}>
            <Image
              src={props.image}
              alt="product"
              width={isMobile ? 180 : 346}
              height={isMobile ? 164 : 316}
            />
          </div>

          <div
            id="content-box"
            className={
              props.bg ? classes.contentPrimary : classes.contentSecondary
            }
          >
            <h4>{props.title}</h4>
            <p>{props.description}</p>
          </div>
        </Card>
      </li>
    </Link>
  );
};

export default BookItem;
