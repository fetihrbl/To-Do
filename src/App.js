import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import './App.css';

function App() {

  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if(userInput.trim() !== "") {
      const newItem = {
        id:Math.random(),
        value:userInput,
      };

      setList((prevList) => [...prevList, newItem]);
      setUserInput("");

    }
  };

  const deleteItem = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id))
  };

  const editItem = (index) => {
    const editedValue = prompt("Edit the todo:");
    if(editedValue !== null || editedValue.trim() !== "") {
      setList((prevList) => {
        const updatedList = [...prevList];
        updatedList[index].value = editedValue;
        return updatedList;
      })
    }
  }

  return (
    <div className="App">
       <Container>
            <Row
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "3rem",
                    fontWeight: "bolder",
                }}
            >
                TODO LIST
            </Row>

            <hr />

            <Row>
                <Col md={{ span: 5, offset: 4 }}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="add item . . . "
                            size="lg"
                            value={userInput}
                            onChange={(e) => updateInput(e.target.value)}
                            aria-label="add something"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup>
                            <Button
                                variant="dark"
                                className="mt-2"
                                onClick={addItem}
                            >
                                ADD
                            </Button>
                        </InputGroup>
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 5, offset: 4 }}>
                    <ListGroup>
                        {list.map((item, index) => (
                            <div key={item.id}>
                                <ListGroup.Item
                                    variant="dark"
                                    action
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    {item.value}
                                    <span>
                                        <Button
                                            style={{ marginRight: "10px" }}
                                            variant="light"
                                            onClick={() => deleteItem(item.id)}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            variant="light"
                                            onClick={() => editItem(index)}
                                        >
                                            Edit
                                        </Button>
                                    </span>
                                </ListGroup.Item>
                            </div>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;

