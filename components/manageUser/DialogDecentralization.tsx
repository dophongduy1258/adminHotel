import { useQuery } from "@apollo/client";
import { Dialog, Checkbox } from "@material-ui/core";
import Loading from "../../components/Loading/index";
import { GET_USER_BY_ID } from "../../graphql/auth/getUser";

export default function DialogDecentralization(props) {
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: {
      userID: props.userID,
    },
  });

  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };

  if (loading) return <Loading />;
  if (error || !data) return <h2>Error</h2>;

  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={open}
      onClose={handleClose}
    >
      <div className="dialog-codeVoucher">
        <h2>{data.getUserbyID.name}</h2>
        <span>{data.getUserbyID.role === true ? "Admin" : "Thành viên"}</span>
        <Checkbox
          checked={data.getUserbyID.role}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </div>
    </Dialog>
  );
}
