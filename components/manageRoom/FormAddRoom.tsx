import {
  Button,
  Dialog,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useState } from "react";
import Swal from "sweetalert2";
import InputRoom from "./InputRoom";

// graphql
import { CREATE_ROOM } from "../../graphql/room/createRoom";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function FormAddRoom(props) {
  const router = useRouter();
  // const [nameHotel, setNameHotel] = useState("");
  // const handleChange = (event) => {
  //   setNameHotel(event.target.value);
  // };
  const [createRoom, { data }] = useMutation(CREATE_ROOM, {
    update(_, result) {
      Swal.fire({
        title: "Success",
        text: "Thêm phòng mới thành công",
        icon: "success",
      });
      router.reload();
    },
    onError(err) {
      Swal.fire({
        title: "Thêm phòng không thành công",
        text: err.graphQLErrors[0].message.slice(15),
        icon: "error",
      });
    },
  });

  // const listNameHotel = props.dataHotel.map((value, idx) => {
  //   return <MenuItem value={value.nameHotel}>{value.nameHotel}</MenuItem>;
  // });
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
  };
  // const demo = (value) => {
  //   setDataRoom(value);
  // };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createRoom({
          variables: {
            inputs: {
              numberRoom: valueRooms.numberRoom,
              imgRoom: valueRooms.imgRoom,
              sizeRoom: valueRooms.sizeRoom,
              bed: valueRooms.bed,
              amountOfPeople: valueRooms.amountOfPeople,
              price: +valueRooms.price,
              quality: valueRooms.quality,
              hotel: valueRooms.hotel,
            },
          },
        });
      }}
    >
      <FormControl
        style={{ width: "230px", marginRight: "20px" }}
        variant="outlined"
      >
        {/* <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={nameHotel}
          onChange={handleChange}
          label="Khách sạn"
        >
           <MenuItem value={value.nameHotel}>{value.nameHotel}</MenuItem>
        </Select> */}
        {/* <InputRoom recieveData={demo} /> */}

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
      </FormControl>
      <div className="controls">
        <Button className="btn-cancel" onClick={props.handleClose}>
          Hủy
        </Button>
        <Button className="btn-agree" type="submit">
          Xác nhận
        </Button>
      </div>
    </form>
  );
}
