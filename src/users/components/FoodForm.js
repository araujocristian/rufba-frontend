import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function AddressForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: ""
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Selecione as opções disponíveis
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name-disabled">Descrição</InputLabel>
        <Select
          value={values.name}
          onChange={handleChange}
          input={<Input name="name" id="opcao-1" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="feijao">Feijão</MenuItem>
          <MenuItem value="arroz">Arroz</MenuItem>
          <MenuItem value="macarrao">Macarrão</MenuItem>
        </Select>
        <FormHelperText>Opção 1</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name-disabled">Descrição</InputLabel>
        <Select
          value={values.name}
          onChange={handleChange}
          input={<Input name="name" id="opcao-1" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="feijao">Feijão</MenuItem>
          <MenuItem value="arroz">Arroz</MenuItem>
          <MenuItem value="macarrao">Macarrão</MenuItem>
        </Select>
        <FormHelperText>Opção 2</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name-disabled">Descrição</InputLabel>
        <Select
          value={values.name}
          onChange={handleChange}
          input={<Input name="name" id="opcao-1" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="feijao">Feijão</MenuItem>
          <MenuItem value="arroz">Arroz</MenuItem>
          <MenuItem value="macarrao">Macarrão</MenuItem>
        </Select>
        <FormHelperText>Opção 3</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name-disabled">Descrição</InputLabel>
        <Select
          value={values.name}
          onChange={handleChange}
          input={<Input name="name" id="opcao-1" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="feijao">Feijão</MenuItem>
          <MenuItem value="arroz">Arroz</MenuItem>
          <MenuItem value="macarrao">Macarrão</MenuItem>
        </Select>
        <FormHelperText>Opção 4</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name-disabled">Descrição</InputLabel>
        <Select
          value={values.name}
          onChange={handleChange}
          input={<Input name="name" id="opcao-1" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="feijao">Feijão</MenuItem>
          <MenuItem value="arroz">Arroz</MenuItem>
          <MenuItem value="macarrao">Macarrão</MenuItem>
        </Select>
        <FormHelperText>Opção 5</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name-disabled">Descrição</InputLabel>
        <Select
          value={values.name}
          onChange={handleChange}
          input={<Input name="name" id="opcao-1" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="feijao">Feijão</MenuItem>
          <MenuItem value="arroz">Arroz</MenuItem>
          <MenuItem value="macarrao">Macarrão</MenuItem>
        </Select>
        <FormHelperText>Opção 6</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name-disabled">Descrição</InputLabel>
        <Select
          value={values.name}
          onChange={handleChange}
          input={<Input name="name" id="opcao-1" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="feijao">Feijão</MenuItem>
          <MenuItem value="arroz">Arroz</MenuItem>
          <MenuItem value="macarrao">Macarrão</MenuItem>
        </Select>
        <FormHelperText>Opção 7</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name-disabled">Descrição</InputLabel>
        <Select
          value={values.name}
          onChange={handleChange}
          input={<Input name="name" id="opcao-1" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="feijao">Feijão</MenuItem>
          <MenuItem value="arroz">Arroz</MenuItem>
          <MenuItem value="macarrao">Macarrão</MenuItem>
        </Select>
        <FormHelperText>Opção 8</FormHelperText>
      </FormControl>
    </React.Fragment>
  );
}
