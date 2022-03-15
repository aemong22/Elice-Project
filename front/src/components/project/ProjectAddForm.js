import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from 'react-datepicker';

function ProjectAddForm({ setIsAdding }) {
  const [title, setTitle] = useState(""); // 프로젝트 제목
  const [description, setDescription] = useState(""); // 프로젝트 상세내용
  const [startDate, setStartDate] = useState(new Date()); // 프로젝트 시작일
  const [endDate, setEndDate] = useState(new Date()); // 프로젝트 종료일

  return(
    <Form>
      <Form.Group controlId="formBasicTitle" className="mt-3">
        <Form.Control
          type="text"
          placeholder="프로젝트 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDescription" className="mt-3">
        <Form.Control
          type="text"
          placeholder="프로젝트 상세내용"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group as={Row} className="mt-3">
        <Col md="auto">
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </Col>
        <Col md="auto">
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mt-3 text-center">
        <Col>
          <Button variant="primary" type="submit" className="me-3">확인</Button>
          <Button variant="secondary" onClick={() => setIsAdding(false)}>취소</Button>
        </Col>
      </Form.Group>
    </Form>
  )
}

export default ProjectAddForm;