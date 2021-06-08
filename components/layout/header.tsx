import { useQuery } from "@apollo/client";
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Popover,
  Typography,
} from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Loading from "../Loading/index";
import Cookie from "js-cookie";

//graphql
import { GET_USER } from "../../graphql/auth/getUser";
import { useRouter } from "next/dist/client/router";

export default function Header(props) {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      token: Cookie.get("jwtToken"),
    },
  });

  if (loading) return <Loading />;
  if (error || !data) return <h2>Error</h2>;

  const handelLogout = () => {
    Cookie.remove("jwtToken");
    router.push("/");
  };

  return (
    <div className="header">
      <div className="nav-list">
        <Chip
          className="label-user"
          label={data ? data.getUser.name : "Admin"}
          avatar={
            <Avatar className="avatar" src="/static/images/avatar/1.jpg" />
          }
        />
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <IconButton aria-label="delete">
                <ArrowDropDown {...bindTrigger(popupState)} />
              </IconButton>
              {/* </Button> */}
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box style={{ height: "70px" }} p={2}>
                  <Button onClick={handelLogout}>Đăng xuất</Button>
                </Box>
              </Popover>
            </div>
          )}
        </PopupState>
      </div>
    </div>
  );
}
