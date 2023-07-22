import Footer from "../Footer";
import Navbar from "../Navbar";
import BookList from "../books/BookList";
import classes from "./Books.module.css";
const Books = () => {
  const Book_List = [
    {
      id: "b1",
      title: "Dersimiz Futbol",
      description:
        "Futbol Eğitiminde Sağlikli Beslenme, Antrenman ve Oyun Kurallari",
      image: "/images/book1.png",
      bg: false,
    },
    {
      id: "b2",
      title: "Helvaci",
      description: "Kültür, Tarih, Coğrafya",
      image: "/images/book2.png",
      bg: false,
    },
    {
      id: "b3",
      title: "Aliağa Kuş Cenneti",
      description: "ve Güzelhisar Deltasi",
      image: "/images/book1.png",
      bg: false,
    },
    {
      id: "b4",
      title: "Myrina 4",
      description: "Bergama Müzesindeki Myrina Terracotta",
      image: "/images/book2.png",
      bg: false,
    },
    {
      id: "b5",
      title: "Myrina 3",
      description: "Kültürel Mirasin Korunmasi ve Geleceğe Aktarilmasi",
      image: "/images/book1.png",
      bg: false,
    },
    {
      id: "b6",
      title: "Yörükler ve Derici Yörükler Tarihi",
      description: "Desc Text",
      image: "/images/book2.png",
      bg: false,
    },
    {
      id: "b7",
      title: "Aliağa ve Çevresi",
      description:
        "Aiolis Bölgesi-Arkeoloji ve Disiplinlerarasi Araştirma Sempozyumu",
      image: "/images/book1.png",
      bg: false,
    },
    {
      id: "b8",
      title: "Tisna-I",
      description: "Desc Text",
      image: "/images/book2.png",
      bg: false,
    },
  ];
  return (
    <div className={classes.container}>
      <Navbar />
      <BookList books={Book_List} />
      <Footer />
    </div>
  );
};

export default Books;
