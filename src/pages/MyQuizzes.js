import React, { useEffect, useState } from "react"
import BaseLayout from "../layouts/BaseLayout"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { QuizService } from "../services/QuizService";
import { UserService } from "../services/UserService";

const MyQuizzes = () => {

  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await QuizService.getByTeacherId(UserService.user._id);
    setQuizzes(res.data);
  }

  return (
    <BaseLayout>
      {
        quizzes.length
          ? <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Senha</TableCell>
                  <TableCell>Título</TableCell>
                  <TableCell>Expira em</TableCell>
                  <TableCell>Total de respostas</TableCell>
                  <TableCell>Nota média das respostas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {quizzes.map((quiz, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{quiz.password}</TableCell>
                    <TableCell>{quiz.title}</TableCell>
                    <TableCell>{new Intl.DateTimeFormat('pt-BR').format(new Date(quiz.expiryDate))}</TableCell>
                    <TableCell>{quiz.answerCount}</TableCell>
                    <TableCell>{quiz.avgScore}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          : <small>Nenhum quiz encontrado!</small>
      }
    </BaseLayout>
  )
}

export default MyQuizzes;