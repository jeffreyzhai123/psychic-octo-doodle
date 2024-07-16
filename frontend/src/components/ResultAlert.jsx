import Alert from 'react-bootstrap/Alert';

function ResultAlert({result}) {
  return (
    <div>
      {(result.test.includes("failed") && !result.code.includes("javascript")) ? (
        <Alert variant="danger">
          <Alert.Heading>Result</Alert.Heading>
          <p className="mb-0">
            {result.test}
          </p>
          <hr />
          <Alert.Heading>Your Code</Alert.Heading>
          <p className="mb-0">
            {result.code}
          </p>
        </Alert>
      ) : (
        <Alert variant="success">
          <Alert.Heading>Result</Alert.Heading>
          <p className="mb-0">
            {result.test}
          </p>
          <hr />
          <Alert.Heading>Your Code</Alert.Heading>
          <p className="mb-0">
            {result.code}
          </p>
        </Alert>
      )}
    </div>
  );
}

export default ResultAlert;