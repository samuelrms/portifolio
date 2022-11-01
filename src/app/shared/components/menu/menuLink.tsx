import { ListItemButton, ListItemText } from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface ListItemLinkProps {
  label: string;
  path: string;
}

export const ListItemLink: React.FC<ListItemLinkProps> = ({
  path,
  label,
  ...props
}) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(path);

  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(path);
  };

  return (
    <ListItemButton
      sx={{ borderRadius: 2 }}
      selected={!!match}
      onClick={handleClick}
      {...props}
    >
      <ListItemText {...props} primary={label} />
    </ListItemButton>
  );
};
