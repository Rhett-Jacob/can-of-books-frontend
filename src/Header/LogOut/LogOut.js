
// 6-6-23
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      className="buttonDelete logButtons"
      variant="primary"
      onClick={() => logout({ logoutParams: { returnTo: process.env.REACT_APP_AUTH_REDIRECT_URI } })}>
      Log-Out
    </Button>
  );
};

export default LogoutButton
