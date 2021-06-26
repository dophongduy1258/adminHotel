import { TextField } from "@material-ui/core";
import { useState } from "react";

export default function InputRoom(props) {
  const [valueRooms, setValueRooms] = useState({
    numberRoom: "",
    imgRoom: "",
    sizeRoom: "",
    bed: "",
    amountOfPeople: "",
    aboutRoom: "",
    price: 0,
    quality: "",
    hotel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValueRooms({ ...valueRooms, [name]: value });
    props.recieveData(valueRooms);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Khách sạn"
        variant="outlined"
        name="hotel"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Số phòng"
        variant="outlined"
        name="numberRoom"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Hình ảnh"
        variant="outlined"
        name="imgRoom"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Kích thước phòng"
        variant="outlined"
        name="sizeRoom"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Giường"
        variant="outlined"
        name="bed"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Lượng khách"
        variant="outlined"
        name="amountOfPeople"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Giá"
        variant="outlined"
        name="price"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Loại phòng"
        variant="outlined"
        name="quality"
        onChange={handleChange}
      />
    </>
  );
}
