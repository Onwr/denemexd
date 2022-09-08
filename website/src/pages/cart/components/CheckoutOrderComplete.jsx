import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import filePdfFilled from "@iconify/icons-ant-design/file-pdf-filled";
import arrowIosBackFill from "@iconify/icons-eva/arrow-ios-back-fill";
// material
import {
  styled,
  Box,
  Link,
  Button,
  Divider,
  Typography,
  Stack,
} from "@mui/material";

import { DialogAnimate } from "../../../common/animate";
import { PATH_PAGE } from "../../../routes/paths";
import { OrderCompleteIllustration } from "../../../assets/image";

// ----------------------------------------------------------------------

const DialogStyle = styled(DialogAnimate)(({ theme }) => ({
  "& .MuiDialog-paper": {
    margin: 0,
    [theme.breakpoints.up("md")]: {
      maxWidth: "calc(100% - 48px)",
      maxHeight: "calc(100% - 48px)",
    },
  },
}));

// ----------------------------------------------------------------------

export default function CheckoutOrderComplete({ ...other }) {
  const navigate = useNavigate();

  const handleResetStep = () => {
    navigate(PATH_PAGE.food);
  };

  return (
    <DialogStyle fullScreen {...other}>
      <Box sx={{ p: 4, maxWidth: 480, margin: "auto" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" paragraph>
            Thank you for your purchase!
          </Typography>

          <OrderCompleteIllustration sx={{ height: 260, my: 10 }} />

          <Typography align="left" paragraph>
            Thanks for placing order &nbsp;
            <Link href="#">01dc1370-3df6-11eb-b378-0242ac130002</Link>
          </Typography>

          <Typography align="left">
            We will send you a notification within 5 days when it ships.
            <br /> <br /> If you have any question or queries then fell to get
            in contact us. <br /> <br /> All the best,
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          justifyContent="space-between"
          spacing={2}
        >
          <Button
            color="inherit"
            onClick={handleResetStep}
            startIcon={<Icon icon={arrowIosBackFill} />}
          >
            Continue Shopping
          </Button>
          <Button
            variant="contained"
            startIcon={<Icon icon={filePdfFilled} />}
            onClick={handleResetStep}
          >
            Download as PDF
          </Button>
        </Stack>
      </Box>
    </DialogStyle>
  );
}
