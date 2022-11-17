import { Input, Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import BaseLayout from "../layouts/BaseLayout";
import { UserService } from "../services/UserService.js";
import { QuizService } from "../services/QuizService.js";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const CreateQuiz = () => {
  const initialQuestions = [
    {
      "statement": "",
      "alternatives": ["", "", "", ""],
      "correctAnswerIndex": 0,
      "id": Date.now()
    }
  ];

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expiryDate, setExpiryDate] = useState(new Date().toISOString().split("T")[0]);
  const [questions, setQuestions] = useState(initialQuestions);

  async function submit(e) {
    e.preventDefault();
    const quiz = {
      title,
      description,
      expiryDate,
      teacherId: UserService.user._id,
      questions
    };
    try {
      const res = await QuizService.create(quiz);
      navigate("/my-quizzes");
    } catch (e) {
      if (e instanceof AxiosError) {
        const { error } = e.response.data;
        alert(error);
        return;
      }
      alert("Ocorreu um erro interno. Entre em contato com o suporte")
      return;
    }
  }

  function addQuestion() {
    const questionsReference = [...questions];
    questionsReference.push({
      "statement": "",
      "alternatives": ["", "", "", ""],
      "correctAnswerIndex": 0,
      "id": Date.now()
    });
    setQuestions(questionsReference);
  }

  function removeQuestion(id) {
    const questionsReference = [...questions];
    const filtered = questionsReference.filter((q) => q.id !== id);
    setQuestions(filtered);
  }

  function updateQuestion(index, property, value) {
    const questionsReference = [...questions];
    questionsReference[index][property] = value;
    setQuestions(questionsReference);
  }

  function updateQuestionAlternative(index, alternative, value) {
    const questionsReference = [...questions];
    questionsReference[index].alternatives[alternative] = value;
    setQuestions(questionsReference);
  }

  return (
    <BaseLayout>
      <form className="flex flex-col w-1/2" onSubmit={submit}>
        <div className="mb-4">
          <Input onChange={(e) => { setTitle(e.target.value) }} required size="lg" variant="static" label="Título do quiz" placeholder="Exemplo: Revisão trimestral" type="text" />
        </div>
        <div className="mb-6">
          <Input onChange={(e) => { setDescription(e.target.value) }} required size="lg" variant="static" label="Descrição/conteúdo" placeholder="Exemplo: Apostila 1" type="text" />
        </div>
        <div className="mb-4">
          <Input onChange={(e) => { setExpiryDate(e.target.value); }} required size="lg" variant="outlined" label="Data limite para respostas" type="date" min={new Date().toISOString().split("T")[0]} defaultValue={new Date().toISOString().split("T")[0]} />
        </div>

        <hr className="my-3" />

        {questions.map((question, index) =>
          <div key={index}>
            <label className="mb-2">Questão {index + 1} <small onClick={() => { removeQuestion(question.id); }}>remover</small></label>
            <div className="mb-4">
              <Input onChange={(e) => { updateQuestion(index, "statement", e.target.value) }} required size="lg" variant="outlined" label="Enunciado" type="text" />
            </div>
            <div className="mb-4 flex flex-row items-center">
              <input defaultChecked={true} type="radio" name={`correct-${question.id}`} className="mr-2" onChange={(e) => { updateQuestion(index, "correctAnswerIndex", 0) }} />
              <Input onChange={(e) => { updateQuestionAlternative(index, 0, e.target.value) }} required size="lg" variant="outlined" label="Alternativa A" type="text" />
            </div>
            <div className="mb-4 flex flex-row items-center">
              <input type="radio" name={`correct-${question.id}`} className="mr-2" onChange={(e) => { updateQuestion(index, "correctAnswerIndex", 1) }} />
              <Input onChange={(e) => { updateQuestionAlternative(index, 1, e.target.value) }} required size="lg" variant="outlined" label="Alternativa B" type="text" />

            </div>
            <div className="mb-4 flex flex-row items-center">
              <input type="radio" name={`correct-${question.id}`} className="mr-2" onChange={(e) => { updateQuestion(index, "correctAnswerIndex", 2) }} />
              <Input onChange={(e) => { updateQuestionAlternative(index, 2, e.target.value) }} required size="lg" variant="outlined" label="Alternativa C" type="text" />

            </div>
            <div className="mb-4 flex flex-row items-center">
              <input type="radio" name={`correct-${question.id}`} className="mr-2" onChange={(e) => { updateQuestion(index, "correctAnswerIndex", 3) }} />
              <Input onChange={(e) => { updateQuestionAlternative(index, 3, e.target.value) }} required size="lg" variant="outlined" label="Alternativa D" type="text" />

            </div>
            {index + 1 === questions.length ? <Button onClick={addQuestion} className="mb-4 w-full">Adicionar nova questão</Button> : <></>}
          </div>
        )}

        {!questions.length ? <Button onClick={addQuestion} className="mb-4 w-full">Adicionar nova questão</Button> : <></>}

        <Button className="mb-4" type="submit">Criar quiz</Button>
      </form>
    </BaseLayout>
  )
}

export default CreateQuiz;