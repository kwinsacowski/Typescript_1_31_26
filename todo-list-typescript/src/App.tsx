import "./App.css"

function calculateAge(birthYear: number, currentYear: number): number {
  return currentYear - birthYear;
}

function App() {
  const myName: string = "Age calculator";
  const birthYear: number = 1996;
  const currentYear: number = new Date().getFullYear();


  return (
    <div>
      <p>Full Name: {myName}</p>
      <p>Birth year: {birthYear}</p>
      <p>Current year: {currentYear}</p>
      <p>Age: {calculateAge(birthYear, currentYear)}</p>
    </div>
  );
}

export default App