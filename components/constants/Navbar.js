import Image from "next/image";
import classes from "./Navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { useRouter } from "next/router";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;
  const Navbar_Items = [
    { id: "n1", title: "Ana Sayfa", url: "/" },
    { id: "n2", title: "Aliağa Çocuk", url: "/kids" },
    { id: "n3", title: "Kitaplarımız", url: "/books" },
    { id: "n4", title: "Başkan Mesaji", url: "/message" },
    { id: "n5", title: "Hakkımızda", url: "/about" },
    { id: "n6", title: "İletişim", url: "/contact" },
  ];

  const isMobile = useMediaQuery({
    query: "(max-width: 862px)",
  });
  const logoClickHandler = () => {
    router.push("/");
  };
  return (
    <div className={isMobile ? classes.mobileContainer : classes.container}>
      <Image
        src="/images/logos/akk_logo.png"
        width={isMobile ? 65 : 105}
        height={isMobile ? 64 : 104}
        alt="logo"
        onClick={logoClickHandler}
        className={classes.logo}
      />
      {isMobile ? (
        <>
          {!toggle ? (
            <BiMenu
              onClick={() => {
                setToggle(true);
              }}
              className={classes.icon}
            />
          ) : (
            <div className={classes.mobileNav}>
              <div className={classes.mobileNavTop}>
                <Image
                  src="/images/logos/akk_logo.png"
                  width={65}
                  height={64}
                  alt="logo"
                  onClick={logoClickHandler}
                  className={classes.logo}
                />
                <AiOutlineClose
                  className={classes.icon}
                  onClick={() => {
                    setToggle(false);
                  }}
                />
              </div>

              <ul className={classes.listItems}>
                {Navbar_Items.map((item) => (
                  <li key={item.id}>
                    <Link href={item.url} className={classes.button}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <ul className={classes.linkContainer}>
          {Navbar_Items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                className={`${classes.button} ${
                  currentRoute === item.url ? classes.active : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
