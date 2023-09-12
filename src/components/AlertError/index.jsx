import { useContext } from "react";
import { Alert } from "react-bootstrap";
import { ContentContext } from "../../context";

function AlertError() {
  const { error, setError, alertErrorContent } = useContext(ContentContext);

  if (error) {
    return (
      <Alert variant="danger" onClose={() => setError(false)} dismissible>
        <Alert.Heading>Hubo un error</Alert.Heading>
        <p>
          {alertErrorContent}
        </p>
      </Alert>
    );
  }
}

export { AlertError };
