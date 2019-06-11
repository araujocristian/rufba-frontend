import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import ReactDOM from 'react-dom';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const classes = useStyles();

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Selecione as opções disponíveis
      </Typography>
      <FormControl className={classes.formControl} >
        <InputLabel htmlFor="name-disabled">Descrição</InputLabel>
        <Select name="input" label="Select Example" defaultValue="option2">
          <Option value="option1" label="Option 1" />
          <Option value="option2" label="Option 2" />
          <Option value="option3" label="Option 3" />
          <Option value="option4" label="Option 4" />
        </Select>
</FormControl>
</React.Fragment>
)

  }