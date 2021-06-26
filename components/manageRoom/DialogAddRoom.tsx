import { useMutation } from "@apollo/client";
import {
  Button,
  Dialog,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";
import Loading from "../../components/Loading/index";

//graphql
import { GET_HOTELS } from "../../graphql/hotel/getHotels";
import { useQuery } from "@apollo/client";
import FormAddRoom from "./FormAddRoom";

export default function DialogAddRoom(props) {
  const { loading, error, data } = useQuery(GET_HOTELS);

  if (loading) return <Loading />;
  if (error || !data) return <h2>Error</h2>;

  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={open}
      onClose={handleClose}
    >
      <div className="dialog-codeVoucher">
        <h2>Nhập mã khuyến mãi</h2>
        <FormAddRoom dataHotel={data.getHotels} handleClose={handleClose} />
      </div>
    </Dialog>
  );
}
