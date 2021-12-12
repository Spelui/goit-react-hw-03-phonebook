import { Component } from "react";
import s from "./ContactForm.module.scss";

class ContactForm extends Component {
  state = { name: "", number: "" };

  hendleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ name: "", number: "" });
  };

  render() {
    const { hendleChange, handleSubmit, state } = this;
    return (
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.label__input}
            onChange={(e) => hendleChange(e.target.name, e.target.value)}
            type="text"
            name="name"
            value={state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.label__input}
            onChange={(e) => hendleChange(e.target.name, e.target.value)}
            value={state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className="btn">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
