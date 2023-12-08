const cliente = [
  { nome: "Eduarda", idade: "16", CPF: "111.456.789-69" },
  { nome: "Otávio", idade: "17", CPF: "111.456.789-69" },
  { nome: "Karen", idade: "17", CPF: "111.456.789-69" },
  { nome: "Gustavo Lara", idade: "17", CPF: "111.456.789-69" },
  { nome: "Gustavo Castello", idade: "35", CPF: "111.456.789-69" },
];

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      {cliente.map((item) => (
        <div key={item.CPF}>
          Cliente - {item.nome} | Idade - {item.idade}
        </div>
      ))}
    </>
  );
};

export default Contact;
