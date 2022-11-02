import { Icon, ListItem, Typography } from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface ListItemLinkProps {
  label: string;
  path: string;
  icon: string;
}

export const ListItemLink: React.FC<ListItemLinkProps> = ({
  path,
  label,
  icon,
  ...props
}) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(path);

  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(path);
  };

  return (
    <ListItem
      sx={{ width: "100%", justifyContent: "space-between" }}
      selected={!!match}
      onClick={handleClick}
      {...props}
    >
      <Typography {...props} children={label} />
      <Icon>{icon}</Icon>
    </ListItem>
  );
};
