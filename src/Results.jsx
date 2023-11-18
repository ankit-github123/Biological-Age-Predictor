/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function Results(props) {
  return (
    <div>
      <Dialog
        maxWidth="sm"
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className="flex gap-2 justify-center orange_gradient"
        >  <img src="/hilogo.png" className="w-6 h-8" />
          <div className="font-semibold text-xl">Health Intelligence</div>
        </DialogTitle>
        <DialogContent className="!pb-0">
          <DialogContentText
            id="alert-dialog-description"
            className="text-center underline"
          >
            Here are your Biological Age Results from Longevity Advantage
          </DialogContentText>
          <div className="flex flex-col items-center gap-3 mt-3">
            <div>Chronological Age: <span className="font-bold">{parseFloat(props.data.realage).toFixed(2)}</span></div>
            <div>Biological Age: <span className="font-bold">{parseFloat(props.data.bioage).toFixed(2)}</span></div>
            <div className="">Biological Age vs. Chronological: <span className="font-bold border-b-2 border-black">{(parseFloat(props.data.realage)-parseFloat(props.data.bioage)).toFixed(2)}</span></div>
          </div>
          <DialogContentText className="">
            <div className="text-[8px] mt-3 text-justify">
              <b>Important Safety Information:</b> The information from this
              test is for informational purposes only and is not intended as a
              substitute for advice from your physician or other health care
              professional or any information contained on or in any product
              label or packaging. You should not use the information on this
              test for diagnosis or treatment of any health problem or for
              prescription of any medication or other treatment. You should
              consult with a healthcare professional before starting any diet,
              exercise or supplementation program, before taking any medication,
              or if you have or suspect you might have a health problem. You
              should not stop taking any medication without first consulting
              your physician.
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Results;
