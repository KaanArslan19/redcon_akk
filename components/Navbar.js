import Image from "next/image";
import classes from "./Navbar.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { TbMenu } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const Navbar_Items = [
    { id: "n1", title: "AnaSayfa", url: "/" },
    { id: "n2", title: "Aliağa Çocuk", url: "/kids" },
    { id: "n3", title: "Kitaplarimiz", url: "/books" },
    { id: "n4", title: "Başkan Mesaji", url: "/message" },
    { id: "n5", title: "Hakkimizda", url: "/about" },
    { id: "n6", title: "İletişim", url: "/contact" },
  ];
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  useEffect(() => {
    const btnElList = document.querySelectorAll(".button");

    btnElList.forEach((btnEl) => {
      btnEl.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        btnEl.classList.add("active");
      });
    });
  }, []);

  return (
    <div className={classes.container}>
      <Image src="/images/logo.png" width={150} height={150} alt="logo" />
      {isMobile ? (
        <>
          {!toggle ? (
            <TbMenu
              onClick={() => {
                setToggle(true);
              }}
              className={classes.icon}
            />
          ) : (
            <div className={classes.mobileNav}>
              <AiOutlineClose
                className={classes.icon}
                onClick={() => {
                  setToggle(false);
                }}
              />
              <ul className={classes.listItems}>
                {Navbar_Items.map((item) => (
                  <li>
                    <Link
                      key={item.id}
                      href={item.url}
                      className={classes.button}
                    >
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
            <li>
              <Link href={item.url} className={classes.button}>
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
