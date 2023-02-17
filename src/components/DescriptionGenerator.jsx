import OpenAI from "openai-api";
import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

import Response from "./Response";
import Header from "./Header";

// require("dotenv").config();
const openai = new OpenAI(process.env.REACT_APP_OPENAI_API);

export default function DescriptionGenerator() {
  const [output, setOutput] = useState([]);
  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();
  const [result3, setResult3] = useState();
  const [result4, setResult4] = useState();
  const [result5, setResult5] = useState();
  const inputRef = useRef();
  const keywordRef = useRef();
  let input1 = "";
  let input2 = "";

  function resetPage() {
    let input1 = "";
    let input2 = "";
  }

  function handleSubmit(submitEvent) {
    // prevent reloading
    submitEvent.preventDefault();
    input1 = inputRef.current.value;
    input2 = keywordRef.current.value;
    (async () => {
      const res = await openai.complete({
        engine: "text-davinci-003",
        prompt: `Write 5 Google Ads Descriptions that are 60-90 characters for the following product: ${input1} that is being searched with the following keywords: ${input2}`,
        maxTokens: 1000,
        temperature: 0.7,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
      });

      console.log(res);

      let responseData = res.data.choices[0].text;

      console.log(responseData);

      const regex1 = `(?=1)(.*)(?=)`;
      const regex2 = `(?=2)(.*)(?=)`;
      const regex3 = `(?=3)(.*)(?=)`;
      const regex4 = `(?=4)(.*)(?=)`;
      const regex5 = `(?=5)(.*)(?=)`;
      const entry1 = responseData.match(regex1)[0];
      const entry2 = responseData.match(regex2)[0];
      const entry3 = responseData.match(regex3)[0];
      const entry4 = responseData.match(regex4)[0];
      const entry5 = responseData.match(regex5)[0];

      setOutput((prevOutputs) => {
        return [
          {
            response1: entry1,
            prompt: input1,
            response2: entry2,
            response3: entry3,
            response4: entry4,
            response5: entry5,
          },
          ...prevOutputs,
        ];
      });
    })();
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            placeholder="Create Google Ads Descriptions"
            ref={inputRef}
          />
          <Form.Control placeholder="Keywords" ref={keywordRef} />
          <Button type="submit">Generate Descriptions</Button>
        </Form.Group>
      </Form>
      {output.map((responseItem, index) => {
        return <Response key={index} id={index} content={responseItem} />;
      })}
    </>
  );
}
