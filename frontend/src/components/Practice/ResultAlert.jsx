import Alert from 'react-bootstrap/Alert';

function ResultAlert({result}) {
  return (
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
  );
}

export default ResultAlert;