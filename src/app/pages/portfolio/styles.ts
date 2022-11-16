import { Container, styled } from "@mui/material";

export const ContainerSlider = styled(Container)`
  padding: 64px 0 0;
  & .slider-options {
    z-index: 1;
    & .awssld__bullets {
      display: none;
    }
    & .awssld__wrapper {
      border-radius: 12px;
    }
    & .awssld__content {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
    & .awssld__startUp {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }
`;
