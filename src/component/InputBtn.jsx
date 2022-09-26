import { InputBase } from "@mui/material";
const styles = {
  border: "1px solid #A0A2A8",
  borderRadius: "6px",
  padding: "2px 16px 2px 16px",
  width: "100%",
};
export const InputBtn = (props) => {
  return <InputBase placeholder="Энд бичнэ үү" sx={styles} {...props} />;
};
