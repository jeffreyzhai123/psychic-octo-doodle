import Dropdown from 'react-bootstrap/Dropdown';

function DropMenu({numQuestions, callback}) {
    return (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Choose a Question
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            {Array.from({ length: numQuestions }, (_, index) => (
              <Dropdown.Item key={index} onClick={() => callback(index)}>
                Question {index + 1}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      );
}

export default DropMenu;