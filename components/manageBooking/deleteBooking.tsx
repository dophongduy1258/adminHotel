import { useMutation } from "@apollo/client";
import { IconButton } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import swal from "sweetalert";
import { DELETE_ORDER_DETAIL } from "../../graphql/payment/orderDetail";

export default function DeleteOrderDetail({ orderDetailID }) {
  const router = useRouter();
  const reLoadPage = () => {
    router.reload();
  };

  const [deleteOrderDetail, { data }] = useMutation(DELETE_ORDER_DETAIL, {
    update(_, result) {},
  });

  const handelDelete = (orderDetailID) => {
    swal({
      title: "Bạn có chắc là muốn xóa phiếu đặt phòng này ?",
      text: "Sau khi xóa, sẽ không thể khôi phục lại phiếu đặt phòng !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteOrderDetail({
          variables: {
            orderDetailID: orderDetailID,
          },
        });
        swal("Xóa phiếu đặt phòng thành công", {
          icon: "success",
        });
        reLoadPage();
      } else {
        swal("Hủy xóa phiếu đặt phòng thành công");
      }
    });
  };

  return (
    <IconButton onClick={() => handelDelete(orderDetailID)}>
      <i className="fas fa-trash-alt"></i>
    </IconButton>
  );
}
