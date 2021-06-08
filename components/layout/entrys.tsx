import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

export default function Entry(props) {
  return (
    <div className="entry">
      <h2 className="title">Quản lý phòng</h2>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className="table-row">
              <TableCell>STT</TableCell>
              <TableCell>Khách sạn</TableCell>
              <TableCell align="center">Mã phòng</TableCell>
              <TableCell align="center">Số người</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
              <TableCell align="center">Kích thước phòng</TableCell>
              <TableCell align="center">Giường</TableCell>
              <TableCell align="center">Giá</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="list-item">
              <TableCell>1</TableCell>
              <TableCell align="center">The Imperal</TableCell>
              <TableCell align="center">A101</TableCell>
              <TableCell align="center">5</TableCell>
              <TableCell className="item-status" align="center">
                Trống
              </TableCell>
              <TableCell align="center">10m2</TableCell>
              <TableCell align="center">Giường đôi</TableCell>
              <TableCell align="center">2800000 VNĐ</TableCell>
              <TableCell align="center">
                <div className="entry-btn">
                  <IconButton>
                    <i className="fas fa-edit"></i>
                  </IconButton>
                  <IconButton>
                    <i className="fas fa-trash-alt"></i>
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>

            <TableRow className="list-item">
              <TableCell>2</TableCell>
              <TableCell align="center">The Imperal</TableCell>
              <TableCell align="center">A101</TableCell>
              <TableCell align="center">5</TableCell>
              <TableCell className="item-status" align="center">
                Trống
              </TableCell>
              <TableCell align="center">10m2</TableCell>
              <TableCell align="center">Giường đôi</TableCell>
              <TableCell align="center">2800000 VNĐ</TableCell>
              <TableCell align="center">
                <div className="entry-btn">
                  <IconButton>
                    <i className="fas fa-edit"></i>
                  </IconButton>
                  <IconButton>
                    <i className="fas fa-trash-alt"></i>
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
