import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useState } from "react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import closeFill from "@iconify/icons-eva/close-fill";
import downloadFill from "@iconify/icons-eva/download-fill";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
// material
import {
  Box,
  Tooltip,
  IconButton,
  DialogActions,
  Stack,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

//
import InvoicePDF from "./InvoicePDF";
import { DialogAnimate } from "../../../../../common/animate";

// ----------------------------------------------------------------------

InvoiceToolbar.propTypes = {
  invoice: PropTypes.object.isRequired,
};

export default function InvoiceToolbar({ invoice }) {
  const [openPDF, setOpenPDF] = useState(false);

  const handleOpenPreview = () => {
    setOpenPDF(true);
  };

  const handleClosePreview = () => {
    setOpenPDF(false);
  };

  return (
    <>
      <Stack direction="row" justifyContent="flex-start" spacing={1.5}>
        <Button
          color="info"
          size="small"
          variant="contained"
          onClick={handleOpenPreview}
          endIcon={<Icon icon={eyeFill} />}
          sx={{ mx: 1 }}
        >
          Print
        </Button>

        <PDFDownloadLink
          document={<InvoicePDF invoice={invoice} />}
          fileName={`INVOICE-${invoice.serialNo}`}
          style={{ textDecoration: "none" }}
        >
          {({ loading }) => (
            <LoadingButton
              size="small"
              loading={loading}
              variant="contained"
              loadingPosition="end"
              endIcon={<Icon icon={downloadFill} />}
            >
              Download
            </LoadingButton>
          )}
        </PDFDownloadLink>
      </Stack>

      <DialogAnimate fullScreen open={openPDF}>
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <DialogActions
            sx={{
              zIndex: 9,
              padding: "12px !important",
              boxShadow: (theme) => theme.customShadows.z8,
            }}
          >
            <Tooltip title="Close">
              <IconButton color="inherit" onClick={handleClosePreview}>
                <Icon icon={closeFill} />
              </IconButton>
            </Tooltip>
          </DialogActions>
          <Box sx={{ flexGrow: 1, height: "100%", overflow: "hidden" }}>
            <PDFViewer width="100%" height="100%" style={{ border: "none" }}>
              <InvoicePDF invoice={invoice} />
            </PDFViewer>
          </Box>
        </Box>
      </DialogAnimate>
    </>
  );
}
