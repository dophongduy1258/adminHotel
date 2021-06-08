import { useMutation } from "@apollo/client";
import { IconButton } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import swal from "sweetalert";
import { DELETE_ROOM } from "../../graphql/room/deleteRoom";

export default function DeleteRoom({ roomID }) {
  const router = useRouter();
  const reLoadPage = () => {
    router.reload();
  };

  const [deleteRoom, { data }] = useMutation(DELETE_ROOM, {
    update(_, result) {},
  });

  const handelDelete = (roomID) => {
    swal({
      title: "Bạn có chắc là muốn xóa phòng ?",
      text: "Sau khi xóa, sẽ không thể khôi phục lại phòng !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteRoom({
          variables: {
            roomID: roomID,
          },
        });
        swal("Xóa phòng thành công", {
          icon: "success",
        });
        reLoadPage();
      } else {
        swal("Hủy xóa phòng thành công");
      }
    });
  };

  return (
    <IconButton onClick={() => handelDelete(roomID)}>
      <i className="fas fa-trash-alt"></i>
    </IconButton>
  );
}
