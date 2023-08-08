import classes from "./BookItem.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Card from "../ui/Card";

const BookItem = (props) => {
  const router = useRouter();
  const showDetailsHandler = () => {
    router.push("/books/bookdetails/" + props.id);
  };

  return (
    <li className={classes.container} onClick={showDetailsHandler}>
      <Card>
        <div className={props.bg ? classes.differentBg : classes.imgBox}>
          <Image src={props.image} alt="product" width={200} height={200} />
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
  );
};

export default BookItem;
