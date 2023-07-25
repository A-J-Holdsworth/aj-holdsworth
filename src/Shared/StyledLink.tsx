import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: initial;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  padding: 1em;

  &:hover {
    border-bottom: 1px solid orange;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: any) => {
  return <StyledLink {...props} />;
};
