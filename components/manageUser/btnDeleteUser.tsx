import { useMutation } from "@apollo/client";
import { IconButton } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import swal from "sweetalert";

// graphql
import { DELETE_USER } from "../../graphql/customer/deleteUser";

export default function BtnDeleteUser(props) {
  const router = useRouter();

  const [deleteUser, { data }] = useMutation(DELETE_USER);

  const handleDeleteUser = (userID) => {
    swal({
      title: "Bạn muốn xóa tài khoản này ?",
      text: "Tài khoản chỉ có thể khôi phục bằng cách tạo mới ! ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteUser({
          variables: {
            userID: userID,
          },
        });
        swal("Xóa tài khoản thành công", {
          icon: "success",
        });
        router.reload();
      } else {
        swal("Hủy việc xóa tài khoản !");
      }
    });
  };

  return (
    <IconButton onClick={() => handleDeleteUser(props.userID)}>
      <i className="fas fa-trash-alt"></i>
    </IconButton>
  );
}
