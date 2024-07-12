import Card from 'react-bootstrap/Card';

function QuestionCard({questions, selectedQuestion}) {
    return (
        <Card>
            <Card.Header>Question {selectedQuestion + 1}</Card.Header>
            <Card.Body>
                <Card.Text>
                  { questions[selectedQuestion] }
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default QuestionCard;