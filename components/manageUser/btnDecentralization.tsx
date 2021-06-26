import { Button } from "@material-ui/core";
import { useState } from "react";
import DialogDecentralization from "./DialogDecentralization";

export default function BtnDecentralization(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleClickOpen}>Phân quyền</Button>
      <DialogDecentralization
        userID={props.userID}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
