import React, { useEffect, useState } from "react";

// Simulated authentication status
const isAuthenticated = false;

// Define a higher-order component as a function
const withAuthorization = (WrappedComponent) => {
  return function WithAuthorization(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      // Simulated authentication check
      setIsLoggedIn(isAuthenticated);
    }, []);

    // Render the wrapped component if the user is authenticated
    return isLoggedIn ? (
      <WrappedComponent {...props} />
    ) : (
      <div>Please log in to view this content.</div>
    );
  };
};

// Regular functional component
const SecretComponent = () => {
  return <div>This is a secret component!</div>;
};

// Enhance SecretComponent with the withAuthorization HOC
const AuthorizedComponent = withAuthorization(SecretComponent);

// Now use AuthorizedComponent wherever you need authorization checks
