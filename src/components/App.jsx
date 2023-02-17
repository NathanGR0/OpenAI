import OpenAI from "openai-api";
import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Response from "./Response";
import Header from "./Header";
import HeadlineGenerator from "./HeadlineGenerator";
import DescriptionGenerator from "./DescriptionGenerator";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/headline-generator" element={<HeadlineGenerator />} />
          <Route
            path="/description-generator"
            element={<DescriptionGenerator />}
          />
        </Routes>
      </Router>
    </div>
  );
}
