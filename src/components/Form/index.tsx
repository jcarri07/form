import React, { useState } from 'react';
import styles from '../../app/page.module.css';
import Input from '../Input';
import Button from '../Button';
import Label from '../Label';
import PrimaryButton from '../PrimaryButton';


const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      /* enviar mensaje, simular */
      setName("");
      setEmail("");
      setMessage("");
      // mostrar un alert que el mensaje fue enviado exitosamente
    }
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formInputContainer}>
        <Label text="Full name" />
        <Input value={name} onChange={(value: string) => setName(value)} />
        <Label text="Email address" />
        <Input
          value={email}
          type={"email"}
          onChange={(value: string) => setEmail(value)}
        />
        <Label text="Your message" />
        <Input
          value={message}
          onChange={(value: string) => setMessage(value)}
        />
      </div>
      <div className={styles.containerButton}>
        <PrimaryButton
          value="Send Message"
          onPress={() => {
            sendMessage();
          }}
        />
      </div>
    </div>
  );
};

export default Form;
