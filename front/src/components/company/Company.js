import React, { useState, useEffect } from "react";
import CompanyEditForm from "./CompanyEditForm";
import CompanyCard from "./CompanyCard";
import { Card, Row, Col, Button } from "react-bootstrap";
import * as Api from "../../api";

function Company({ portfolioOwnerId, isEditable }) {
  // useState 훅을 통해 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false);
  // useState 훅을 통해 user 상태를 생성함.

  const [user, setUser] = useState(null);

  useEffect(() => {
    // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
    Api.get("company", portfolioOwnerId).then((res) => setUser(res.data));
  }, [portfolioOwnerId]);

  return (
    <>
      {isEditing ? (
        <CompanyEditForm
          user={user}
          setIsEditing={setIsEditing}
          setUser={setUser}
        />
      ) : (
        <CompanyCard
          user={user}
          setIsEditing={setIsEditing}
          isEditable={isEditable}
        />
      )}
    </>
  );
}
export default Company;
