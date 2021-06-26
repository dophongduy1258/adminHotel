import { Button } from "@material-ui/core";
import Link from "next/link";

export default function TabControl(props) {
  return (
    <div className="tabControl">
      <div className="tabControl-head">
        <Link href="/admin">
          <h2 className="text-logo">dinosours.</h2>
        </Link>
      </div>
      <div className="tabControl-body">
        <div className="wrap-items">
          <Button>
            <Link href="/admin/manageRoom">
              <a>Quản lý phòng</a>
            </Link>
          </Button>
          <Button>
            <Link href="/admin/manageBooking">
              <a>Quản lý đặt phòng</a>
            </Link>
          </Button>
          <Button>
            <Link href="/admin/manageHotel">
              <a>Quản lý khách sạn</a>
            </Link>
          </Button>
          <Button>
            <Link href="/admin/manageUser">
              <a>Quản lý người dùng</a>
            </Link>
          </Button>
          <Button>
            <Link href="/admin/manageDecentralization">
              <a>Phân quyền thành viên</a>
            </Link>
          </Button>
          <Button>
            <Link href="/admin/manageHistoryPayment">
              <a>Lịch sử thanh toán</a>
            </Link>
          </Button>

          <Button>
            <Link href="/admin/manageBill">
              <a>Quản lý hóa đơn</a>
            </Link>
          </Button>
          <Button>
            <Link href="/admin/manageRevenue">
              <a>Doanh thu</a>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
