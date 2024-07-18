import Accordion from 'react-bootstrap/Accordion';
import ResultAlert from '../ResultAlert';

function QuestionCard({results}) {

    return (
        <Accordion>
          {results.map((resultGroup, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header>Test #{index + 1}</Accordion.Header>
          <Accordion.Body>
            {resultGroup.map((result, resultIndex) => (
                <ResultAlert key={resultIndex} result={result} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      ))}
        </Accordion>
      );
}

export default QuestionCard;