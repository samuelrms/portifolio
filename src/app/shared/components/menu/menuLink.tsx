import { ListItemButton, ListItemText } from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface ListItemLinkProps {
  label: string;
  path: string;
  onClick: (() => void) | undefined;
}

export const ListItemLink: React.FC<ListItemLinkProps> = ({ path, label }) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(path);

  /**
   * utilizado para comparar as rotas, para utilizar subRotas passar o end como false
   */
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(path);
  };

  return (
    <ListItemButton
      sx={{ borderRadius: 2 }}
      selected={!!match}
      onClick={handleClick}
    >
      <ListItemText primary={label} />
    </ListItemButton>
  );
};
