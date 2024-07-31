import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";

const ExpenseForm = () => {
  const [inputValue, setInputValue] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    // Here we should be able to identify this input by this inputIdentifier,
    // inputIdentifier is amount, date, description, one of these three values.
    // We can dynamically set this property and target a specific property
    // by using square brackets [] and passing inputIdentifier between the square brackets,
    // We set the enteredValue as a value for this dynamically access property.
    // We then use inputChangedHandler.bind(this, 'amount') if amount inside the input as identifier.
    setInputValue((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputValue.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputValue.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCorrect: false // default it true
          // autoCapitalize: 'none'
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValue.description,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
