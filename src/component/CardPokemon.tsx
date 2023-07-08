import React, { useState, useEffect } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    parentRoot: {
      display: "grid",
      placeItems: "center",
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(6),
        width: theme.spacing(40),
        height: theme.spacing(50),
      },
    },
    media: {
      height: 400,
    },
    left: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    b1: {
      width: "100%",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30,
      color: "black",
    },
  })
);

function CardPokemon() {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState({});

  interface Todo {
    name: string;
    id: number;
    image: string;
  }

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
      .then((response) => response.json())
      .then((res) => setTodos(res.slice(0, 30)))
      .catch((err) => setError(err));
  }, []);
  return (
    <div className={classes.root}>
      {todos.map((todo: Todo) => (
        <Card>
          <CardMedia>
            <img className="imagePokemon" src={todo.image} />
          </CardMedia>
          <CardContent className={classes.left}>
            <Typography className={classes.b1} component="p">
              {todo.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CardPokemon;
