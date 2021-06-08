import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Dialog,
  Link,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import Head from "next/head";
import { useState } from "react";
import MainLayout from "../layout/mainLayout";

// graphql
import { UPDATE_ROOM } from "../../graphql/room/updateRoom";

import Swal from "sweetalert2";
import { useRouter } from "next/dist/client/router";

export default function FormUpdateRoom({ dataRoom, updateRoomID }) {
  const router = useRouter();

  const [updateRoom, { data }] = useMutation(UPDATE_ROOM, {
    update(_, result) {
      Swal.fire({
        title: "Success",
        text: "Cập nhật thành công",
        icon: "success",
        confirmButtonText: "Ok",
      });
      router.push("/admin/manageRoom");
    },
  });
  // const [check, setCheck] = useState(dataRoom.status);

  // const changeStatus = (e) => {
  //   const checked = e.target.checked;
  //   setCheck({
  //     check: checked,
  //   });
  // };

  const [updateData, setUpdate] = useState({
    id: updateRoomID,
    numberRoom: dataRoom.numberRoom,
    amountOfPeople: dataRoom.amountOfPeople,
    status: dataRoom.status,
    sizeRoom: dataRoom.sizeRoom,
    bed: dataRoom.bed,
    price: dataRoom.price,
  });

  const handelChange = (e) => {
    const target = e.target;
    let value = target.value;
    const name = target.name;
    if (name === "status") {
      value = target.checked === "true" ? true : false;
    }

    setUpdate({
      ...updateData,
      [name]: value,
      // status: target.checked,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    updateRoom({
      variables: {
        inputs: {
          id: updateRoomID,
          numberRoom: updateData.numberRoom,
          amountOfPeople: updateData.amountOfPeople,
          status: updateData.status,
          sizeRoom: updateData.sizeRoom,
          bed: updateData.bed,
          price: +updateData.price,
        },
      },
    });
  };

  return (
    <>
      <Box className="form-edit-room">
        <Paper className="wrap-from">
          <div className="title">
            <h2 className="text">
              Cập nhật thông tin phòng {dataRoom.numberRoom}
            </h2>
          </div>
          <div className="wrap-input">
            <form onSubmit={handelSubmit}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Khách sạn"
                variant="outlined"
                className="input-text"
                disabled
                defaultValue={dataRoom.hotel}
              />

              <TextField
                fullWidth
                id="outlined-basic"
                label="Mã phòng"
                variant="outlined"
                className="input-text"
                name="numberRoom"
                value={updateData.numberRoom}
                onChange={handelChange}
              />

              <TextField
                fullWidth
                id="outlined-basic"
                label="Số người"
                variant="outlined"
                className="input-text"
                defaultValue={updateData.amountOfPeople}
                name="amountOfPeople"
                onChange={handelChange}
              />
              {/* <input
                type="number"
                name="amountOfPeople"
                value={updateData.amountOfPeople}
                onChange={handelChange}
              /> */}

              <span>Trạng thái phòng</span>
              <Switch
                name="status"
                checked={updateData.status}
                onChange={handelChange}
                inputProps={{ "aria-label": "secondary checkbox" }}
              />

              <TextField
                fullWidth
                id="outlined-basic"
                label="Kích thước phòng"
                variant="outlined"
                className="input-text"
                defaultValue={updateData.sizeRoom}
                name="sizeRoom"
                onChange={handelChange}
              />

              <TextField
                fullWidth
                id="outlined-basic"
                label="Giường"
                variant="outlined"
                className="input-text"
                defaultValue={updateData.bed}
                name="bed"
                onChange={handelChange}
              />

              <TextField
                fullWidth
                id="outlined-basic"
                label="Loại phòng"
                disabled
                variant="outlined"
                defaultValue={dataRoom.quality}
                className="input-text"
              />

              <TextField
                fullWidth
                id="outlined-basic"
                label="Giá"
                variant="outlined"
                className="input-text"
                defaultValue={updateData.price}
                name="price"
                onChange={handelChange}
              />
              <div className="form-action">
                <Button variant="contained" color="secondary">
                  <Link href="/admin/manageRoom">
                    <a>Hủy</a>
                  </Link>
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  <Link href="/admin/manageRoom">
                    <a>Xác nhận</a>
                  </Link>
                </Button>
              </div>
            </form>
          </div>
        </Paper>
      </Box>
    </>
  );
}
